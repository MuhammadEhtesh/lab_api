module.exports = (sequelize, Sequelize) => {
    const County = sequelize.define(
      "County",
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
        zipCode: {
          type: Sequelize.STRING,
          allowNull: false,
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
        tableName: "County",
      }
    );
    return County;
  };