const express = require("express");
const recipeRouter = require("./recipe/recipe-router");

const server = express();

server.use(express.json());

server.use("*", (req, res) => {
  res.json({ api: "up" });
});

server.use("/api/recipes", recipeRouter);

module.exports = server;
