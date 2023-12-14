const sequelize = require('../config/sequelize');
const { Sequelize, DataTypes } = require('sequelize');

const Product = sequelize.define('product', {
  users_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  stok: {
    type: DataTypes.INTEGER,
  },
  status: { 
    type: DataTypes.BOOLEAN,
  },
  image_url: {
    type: DataTypes.TEXT,
  },
});

module.exports = Product;
