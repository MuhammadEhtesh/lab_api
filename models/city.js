module.exports = (sequelize, Sequelize) => {
    const City = sequelize.define(
      "City",
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
        countyId: {
            type: Sequelize.INTEGER,
            references:{
                model:"County",
                key:'id'
            }
          },
        stateId: {
            type: Sequelize.INTEGER,
            references:{
                model:"State",
                key:'id'
            }
          },
        countryId: {
            type: Sequelize.INTEGER,
            references:{
                model:"Country",
                key:'id'
            }
          },
    
      },
      {
        tableName: "City",
      }
    );
    return City;
  };