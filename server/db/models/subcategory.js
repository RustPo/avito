'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subcategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category, { foreignKey: 'categoryId' });
      this.hasMany(models.Item, { foreignKey: 'subcategoryId' });
    }
  }
  Subcategory.init(
    {
      title: DataTypes.STRING,
      url: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Subcategory',
    },
  );
  return Subcategory;
};
