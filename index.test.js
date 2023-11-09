const request = require("supertest");
const Restaurant = require("./models/Restaurant");
const app = require("./src/app");
const syncSeed = require("./seed");
//

beforeEach(async () => {
  await syncSeed();
});

test("Get restaurants data", async () => {
  const response = await request(app).get("/restaurants");
  expect(response.text.includes("AppleBees")).toBe(true);
});

test("Returns full array", async () => {
  const response = await request(app).get("/restaurants");
  expect(response.body).toHaveLength(await Restaurant.count());
});
//
test("Returns correct data", async () => {
  const response = await request(app).get("/restaurants");
  expect(response.body[0].name).toContain("AppleBees");
  expect(response.body[2].location).toContain("Houston");
  expect(response.body[1].name).toContain("LittleSheep");
});
//
test("Returns correct id 1", async () => {
  const response = await request(app).get("/restaurants/1");
  expect(response.body.name).toBe("AppleBees");
});
//
test("Returns correct id 2", async () => {
  const response = await request(app).get("/restaurants/2");
  expect(response.body.name).toBe("LittleSheep");
});
//
test("Posts correctly", async () => {
  const postNew = await request(app)
    .post("/restaurants")
    .send({ name: "New Place", location: "Here", cuisine: "food" });
  const response = await request(app).get("/restaurants");
  expect(response.body[3].name).toBe("New Place");
});
//
test("Updates correctly", async () => {
  const putNew = await request(app)
    .put("/restaurants/1")
    .send({ name: "Brand New Place" });
  const response = await request(app).get("/restaurants/1");
  expect(response.body.name).toBe("Brand New Place");
});
//
test("Get restaurants works", async () => {
  const response = await request(app).get("/restaurants");
  expect(response.statusCode).toBe(200);
});
//
test("Delete restaurants works", async () => {
  const deleteIt = await request(app).delete("/restaurants/1");
  const response = await request(app).get("/restaurants");
  expect(response.body[0].name).toBe("LittleSheep");
});
//
test("POST req throws error if fields are empty", async () => {
  const postNew = await request(app)
    .post("/restaurants")
    .send({ name: "hi", location: "hi", cuisine: "" });
  console.log(postNew.body);
  expect(postNew.body.error[0].msg).toBe("Invalid value");
});
