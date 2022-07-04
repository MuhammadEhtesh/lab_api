module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define(
      "Client",
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        username: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.STRING
        }
      },
      {
        tableName: "Clients",
      }
    );
    return Client;
  };