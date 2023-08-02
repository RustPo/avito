'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Subcategory, { foreignKey: 'subcategoryId' });
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.hasMany(models.Photo, { foreignKey: 'itemId' });
      this.hasMany(models.Favorite, { foreignKey: 'itemId' });
    }
  }
  Item.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.DOUBLE,
      address: DataTypes.STRING,
      subcategoryId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      features: DataTypes.JSON,
      isActive: DataTypes.BOOLEAN,
      url: DataTypes.STRING,
      count: DataTypes.INTEGER,
      favorites: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Item',
    },
  );
  return Item;
};
