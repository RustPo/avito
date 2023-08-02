require('dotenv').config();
const { Subcategory } = require('../../db/models');

module.exports.getSubcategories = async (req, res) => {
  try {
    const subCategories = await Subcategory.findAll({ raw: true });
    res.json(subCategories);
  } catch (error) {
    res.status(400).json({ error: 'Failed to get subCategories.' });
  }
};

module.exports.getSubcategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const subCategory = await Subcategory.findByPk(id, { raw: true });
    res.json(subCategory);
  } catch (error) {
    res.status(400).json({ error: 'Failed to get subCategory.' });
  }
};
