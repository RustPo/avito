require('dotenv').config();
const { Sequelize } = require('sequelize');
const { Category, Subcategory } = require('../../db/models');

module.exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({ raw: true });
    res.json(categories);
  } catch (error) {
    res.status(400).json({ error: 'Failed to get categories.' });
  }
};

module.exports.getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByPk(id, { raw: true });
    res.json(category);
  } catch (error) {
    res.status(400).json({ error: 'Failed to get category.' });
  }
};

module.exports.getCategoriesOptgroup = async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [
        {
          model: Subcategory,
          where: Sequelize.literal(
            '"Subcategories"."categoryId" = "Category"."id"'
          ),
        },
      ],
      raw: false,
      nest: true,
    });
    res.json(categories);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Failed to get categories optgroup.' });
  }
};
