const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Bexter29", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
