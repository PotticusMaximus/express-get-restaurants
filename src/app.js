const express = require("express");
const app = express();
const Restaurant = require("../models/index");
const db = require("../db/connection");

//TODO: Create your GET Request Route Below:
app.get("/restaurants", async (req, res) => {
  const findRestaurants = await Restaurant.findAll();
  res.json(findRestaurants);
});

app.get("/restaurants/:id", async (req, res) => {
  const paramId = req.params.id;
  const foundRestaurant = await Restaurant.findByPk(paramId);
  res.json(foundRestaurant);
});

module.exports = app;
