const router = require('express').Router();
const {
  getCategories,
  getCategoryById,
  getCategoriesOptgroup,
} = require('../controllers/cat.controller');

module.exports = router
  .get('/', getCategories)
  .get('/optgroup', getCategoriesOptgroup)
  .get('/:id', getCategoryById);
