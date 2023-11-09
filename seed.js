const { Restaurant, Menu, Item } = require("./models/index");
const { seedRestaurant, seedMenu, seedItem } = require("./seedData");
const { db } = require("./db/connection");

const syncSeed = async () => {
  await db.sync({ force: true });
  await Restaurant.bulkCreate(seedRestaurant);
  await Menu.bulkCreate(seedMenu);
  await Item.bulkCreate(seedItem);
  // const menu = await Menu.findByPk(1);
  // const item = await Item.findByPk(1);
  // await menu.addItem(item);
  // console.log(menu.addItem);
};

syncSeed();

module.exports = syncSeed;
