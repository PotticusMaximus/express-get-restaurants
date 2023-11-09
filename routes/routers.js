const { Router } = require("express");
const { Restaurant } = require("../models/index");
const restRouter = Router();
//

restRouter.get("/", async (req, res) => {
  try {
    const findRest = await Restaurant.findAll();
    res.json(findRest);
  } catch (error) {
    res.status(500).send({ error: "Error ocurred during GET request" });
  }
});

restRouter.get("/:id", async (req, res) => {
  try {
    const findRest = await Restaurant.findByPk(req.params.id);
    res.json(findRest);
  } catch (error) {
    res.status(500).send({ error: "Error ocurred during GET ID request" });
  }
});

restRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const updateRest = await Restaurant.update(req.body, {
      where: { id: id },
    });
    const findRest = await Restaurant.findAll();
    res.json(findRest);
  } catch (error) {
    res.status(500).send({ error: "Error ocurred during PUT request" });
  }
});

restRouter.post("/", async (req, res) => {
  try {
    const newRest = await Restaurant.create(req.body);
    const findRest = await Restaurant.findAll();
    res.json(findRest);
  } catch (error) {
    res.status(500).send({ error: "Error ocurred during POST request" });
  }
});

restRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const delRest = await Restaurant.destroy({ where: { id: id } });
    const findRest = await Restaurant.findAll();
    res.json(findRest);
  } catch (error) {
    res.status(500).send({ error: "Error ocurred during DELETE request" });
  }
});

module.exports = {
  restRouter,
};
