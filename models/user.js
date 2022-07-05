module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
      "User",
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        firstname: {
          type: Sequelize.STRING,
          allowNull: false
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: false
          },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        gender: {
            type: Sequelize.STRING,
            allowNull: false
          },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        }
      },
      {
        tableName: "Users",
      }
    );
    return User;
  };