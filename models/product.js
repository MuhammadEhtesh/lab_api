module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define(
      "Product",
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        price: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        imageUrl: {
            type: Sequelize.STRING,
            allowNull: false
          }
      },
      {
        tableName: "Products",
      }
    );
    return Product;
  };