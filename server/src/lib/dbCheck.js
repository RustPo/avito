const { sequelize } = require('../../db/models');

module.exports.dbCheck = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection test successful!');
  } catch (error) {
    console.error('Error testing database connection:', error);
  }
};
