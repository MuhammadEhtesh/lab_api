module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
      "User",
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        company: {
          type: Sequelize.STRING,
          allowNull: false
        },
        firstname: {
          type: Sequelize.STRING,
          allowNull: false
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: false
          },
          username: {
            type: Sequelize.STRING,
            allowNull: false
          },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        addressline1: {
          type: Sequelize.STRING,
          allowNull: false
        },
        addressline2: {
          type: Sequelize.STRING,
          allowNull: true
        },
        addressline3: {
          type: Sequelize.STRING,
          allowNull: true
        },
        city: {
          type: Sequelize.STRING,
          allowNull: false
        },
        state: {
          type: Sequelize.STRING,
          allowNull: false
        },
        zipcode: {
          type: Sequelize.STRING,
          allowNull: false
        },
        phonenumber: {
          type: Sequelize.STRING,
          allowNull: false
        },
        password:{
          type: Sequelize.STRING,
          allowNull: true
        }
      },
      {
        tableName: "Users",
      }
    );
    return User;
  };