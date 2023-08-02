const {
  Item,
  User,
  Category,
  Subcategory,
  Photo,
  Favorite,
} = require('../../db/models');

const { saveSeedFile } = require('./saveSeedFile');

module.exports.generateSeedFile = async (model, fileName) => {
  try {
    const data = await model.findAll({
      order: [['id', 'ASC']],
      raw: true,
      nest: true,
    });
    if (model === Item) {
      // const seedData = data.map((d) => ({
      //   ...d.dataValues,
      //   features: JSON.stringify(d.dataValues.features || {}),
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // }));
      const seedData = data.map(({ id, createdAt, updatedAt, ...rest }) => ({
        ...rest,
        features: JSON.stringify(rest.features || {}),
      }));
      saveSeedFile(fileName, seedData);
    } else {
      // const seedData = data.map((d) => ({
      //   ...d.dataValues,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // }));
      const seedData = data.map(({ id, createdAt, updatedAt, ...rest }) => ({
        ...rest,
      }));
      saveSeedFile(fileName, seedData);
    }
  } catch (error) {
    console.error('Error generating seed file:', error);
  }
};
