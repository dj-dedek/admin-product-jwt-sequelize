module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("products", {
    title: {
      type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
  });

  return Product;
};
