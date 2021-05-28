const knex = require("knex");
const configurations = require("../knexfile");
const enviroment = process.env.NODE;

module.exports = knex(configurations[enviroment]);
