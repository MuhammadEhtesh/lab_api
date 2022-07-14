const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: "localhost",
  dialect: "postgres",
  username: "postgres",
  password: "Aqib123",
  database: "Lab_Api",
  logging: false,
});

const dbContext = {};

dbContext.sequelize = sequelize;
dbContext.Sequelize = Sequelize;
dbContext.Clients = require("./client")(sequelize, Sequelize);
dbContext.Users = require("./user")(sequelize, Sequelize);
dbContext.Products = require('./product')(sequelize, Sequelize);



module.exports = dbContext;