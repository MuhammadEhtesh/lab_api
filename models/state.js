module.exports = (sequelize, Sequelize) => {
    const State = sequelize.define(
      "State",
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
        countryId: {
            type: Sequelize.INTEGER,
            references:{
                model:"Country",
                key:'id'
            }
          },
    
      },
      {
        tableName: "State",
      }
    );
    return State;
  };