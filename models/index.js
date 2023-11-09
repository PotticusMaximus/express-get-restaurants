const Restaurant = require("./Restaurant");
const Menu = require("./Menu");
const Item = require("./Item");
const db = require("../db/connection");

Restaurant.hasMany(Menu);
Menu.belongsTo(Restaurant);

Item.belongsToMany(Menu, { through: "MenuItem" });
Menu.belongsToMany(Item, { through: "MenuItem" });

// async function main() {
//   await db.sync();
//   // const restaurant = await Restaurant.findByPk
//   const menu = await Menu.findByPk(1);
//   const item = await Item.findByPk(1);
//   await menu.addItem(item);
//   console.log(menu.addItem);
// }

// main();
//hi

module.exports = {
  Restaurant,
  Menu,
  Item,
};
