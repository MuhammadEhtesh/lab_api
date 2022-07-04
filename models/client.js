module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define(
      "Client",
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
        },
      },
      {
        tableName: "Clients",
      }
    );
    return Client;
  };