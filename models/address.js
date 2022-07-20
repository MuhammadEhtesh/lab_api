module.exports = (sequelize, Sequelize) => {
    const Address = sequelize.define(
      "Address",
      {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          street1: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          street2: {
            type: Sequelize.STRING,
            allowNull: false,
          },

        cityId: {
          type: Sequelize.INTEGER,
          references:{
            model:"City",
            key:'id'
        }
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
        tableName: "Address",
      }
    );
    return Address;
  };