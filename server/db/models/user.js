'use strict';

const fs = require('fs').promises;
const path = require('path');

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Item, { foreignKey: 'userId' });
      this.hasMany(models.Favorite, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      avatarUrl: DataTypes.STRING,
      avatarPath: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );

  User.afterUpdate(async (user, options) => {
    const previousData = user._previousDataValues;
    if (
      previousData.avatarPath &&
      previousData.avatarPath !== user.avatarPath
    ) {
      try {
        const filePath = path.join(process.cwd(), previousData.avatarPath);
        await fs.unlink(filePath);
        console.log('The avatar has been deleted');
      } catch (error) {
        console.error('Error deleting the avatar:', error);
      }
    }
  });

  return User;
};
