const fs = require('fs');
const path = require('path');

module.exports.saveSeedFile = (tableName, date) => {
  const seedFileContent = `'use strict';

    /** @type {import('sequelize').QueryInterface} */
    module.exports = {
      async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('${tableName}', ${JSON.stringify(
    date,
    null,
    2,
  )}, {});
      },

      async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('${tableName}', null, {});
      },
    };
    `;

  const seedFileName = `${new Date()
    .toISOString()
    .replace(/[^\d]/g, '')
    .slice(0, 14)}-${tableName}.js`;
  const seedFilePath = path.join(
    __dirname,
    '..',
    '..',
    'db',
    'seeders',
    seedFileName,
  );
  fs.writeFileSync(seedFilePath, seedFileContent, 'utf8');

  console.log(`Seed file '${seedFileName}' has been created successfully.`);
};
