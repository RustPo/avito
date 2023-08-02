const router = require('express').Router();
const {
  getSubcategories,
  getSubcategoryById,
} = require('../controllers/subcat.controller');

module.exports = router
  .get('/', getSubcategories)
  .get('/:id', getSubcategoryById);
