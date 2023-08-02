const {
  User,
  Category,
  Subcategory,
  Item,
  Photo,
  Favorite,
} = require('../../db/models');

const { generateSeedFile } = require('../lib/generateSeedFile');

module.exports.exportUsers = async (req, res) => {
  try {
    await generateSeedFile(User, 'Users');
    res
      .status(200)
      .json({ message: 'Seed file has been generated successfully.' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Failed to generate seed file.' });
  }
};

module.exports.exportCategories = async (req, res) => {
  try {
    await generateSeedFile(Category, 'Categories');
    res
      .status(200)
      .json({ message: 'Seed file has been generated successfully.' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Failed to generate seed file.' });
  }
};

module.exports.exportSubcategories = async (req, res) => {
  try {
    await generateSeedFile(Subcategory, 'Subcategories');
    res
      .status(200)
      .json({ message: 'Seed file has been generated successfully.' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Failed to generate seed file.' });
  }
};

module.exports.exportItems = async (req, res) => {
  try {
    await generateSeedFile(Item, 'Items');
    res
      .status(200)
      .json({ message: 'Seed file has been generated successfully.' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Failed to generate seed file.' });
  }
};

module.exports.exportPhotos = async (req, res) => {
  try {
    await generateSeedFile(Photo, 'Photos');
    res
      .status(200)
      .json({ message: 'Seed file has been generated successfully.' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Failed to generate seed file.' });
  }
};

module.exports.exportFavorites = async (req, res) => {
  try {
    await generateSeedFile(Favorite, 'Favorites');
    res
      .status(200)
      .json({ message: 'Seed file has been generated successfully.' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Failed to generate seed file.' });
  }
};
