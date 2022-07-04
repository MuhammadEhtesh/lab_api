const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: "localhost",
  dialect: "postgres",
  username: "postgres",
  password: "12345",
  database: "postgres",
  logging: false,
});

const dbContext = {};

dbContext.sequelize = sequelize;
dbContext.Sequelize = Sequelize;
dbContext.Clients = require("./client")(sequelize, Sequelize);

module.exports = dbContext;