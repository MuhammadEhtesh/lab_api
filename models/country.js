module.exports = (sequelize, Sequelize) => {
    const Country = sequelize.define(
      "Country",
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
        countryCode:{
            type:Sequelize.STRING,
            allowNull:false,
        }
    
      },
      {
        tableName: "Country",
      }
    );
    return Country;
  };