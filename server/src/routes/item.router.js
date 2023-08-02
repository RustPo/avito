const router = require('express').Router();
const {
  getItems,
  getItemById,
  setItem,
  getItemsByUserId,
  getItemsBySubcategoryId,
  updateItem,
  getItemsByUrl,
} = require('../controllers/item.controller');

module.exports = router
  .get('/', getItems)
  .get('/:id', getItemById)
  .get('/user/:userId', getItemsByUserId)
  .get('/:category/:subcategory', getItemsByUrl)
  .get('/subcategory/:subcategoryId', getItemsBySubcategoryId)
  .post('/:userId', setItem)
  .put('/:id', updateItem);
