const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: "localhost",
  dialect: "postgres",
  username: "postgres",
  password: "superuser123",
  database: "Regdb",
  logging: false,
});

const dbContext = {};

dbContext.sequelize = sequelize;
dbContext.Sequelize = Sequelize;
dbContext.Clients = require("./client")(sequelize, Sequelize);
dbContext.Users = require("./user")(sequelize, Sequelize);
dbContext.Products = require('./product')(sequelize, Sequelize);
dbContext.Country = require('./country')(sequelize, Sequelize);
dbContext.State = require('./state')(sequelize, Sequelize);
dbContext.County = require('./county')(sequelize, Sequelize);
dbContext.City = require('./city')(sequelize, Sequelize);
dbContext.Address = require('./address')(sequelize, Sequelize);

module.exports = dbContext;