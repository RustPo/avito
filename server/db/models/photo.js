'use strict';
const fs = require('fs').promises;
const path = require('path');

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Item, { foreignKey: 'itemId' });
    }
  }
  Photo.init(
    {
      url: DataTypes.STRING,
      path: DataTypes.STRING,
      itemId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Photo',
    },
  );

  Photo.afterDestroy(async (photo, options) => {
    try {
      const filePath = path.join(process.cwd(), photo.path);
      await fs.unlink(filePath);
      console.log('The photo has been deleted');
    } catch (error) {
      console.error('Error deleting the photo:', error);
    }
  });

  return Photo;
};
