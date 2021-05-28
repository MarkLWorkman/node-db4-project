const express = require("express");
const server = express();

const RecipesRouter = require("./recipes/recipe-router");

server.use(express.json());
server.use("/api/recipes", RecipesRouter);

server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
