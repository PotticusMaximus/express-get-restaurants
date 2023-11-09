const express = require("express");
const app = express();
const { Restaurant, Menu, Item } = require("../models/index");
const db = require("../db/connection");
const { Sequelize, Model } = require("sequelize");
const { restRouter } = require("../routes/routers");

// app.get("/restaurants", async (req, res) => {
//   const findRestaurants = await Restaurant.findAll({
//     include: Menu,
//   });
//   res.json(findRestaurants);
// });

// app.get("/restaurants/:id", async (req, res) => {
//   const paramId = req.params.id;
//   const foundRestaurant = await Restaurant.findByPk(paramId);
//   res.json(foundRestaurant);
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/restaurants", restRouter);
// app.post("/restaurants", async (req, res) => {
//   let data = await Restaurant.create(req.body);
//   res.json(data);
// });

// app.put("/restaurants/:id", async (req, res) => {
//   const replaceRestaurant = await Restaurant.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//   });
//   res.send("Success");
// });
// //
// app.delete("/restaurants/:id", async (req, res) => {
//   const paramId = req.params.id;
//   const foundRestaurant = await Restaurant.destroy({ where: { id: paramId } });
//   res.send(`Deleted id ${paramId}`);
// });

module.exports = app;
