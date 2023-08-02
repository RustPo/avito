'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      price: {
        type: Sequelize.DOUBLE,
      },
      address: {
        type: Sequelize.STRING,
      },
      subcategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Subcategories',
          },
          key: 'id',
        },
        onDelete: 'cascade',
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id',
        },
        onDelete: 'cascade',
        allowNull: false,
      },
      features: {
        type: Sequelize.JSON,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
      },
      url: {
        type: Sequelize.STRING,
      },
      count: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      favorites: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Items');
  },
};
