const router = require('express').Router();
const {
  exportUsers,
  exportCategories,
  exportSubcategories,
  exportItems,
  exportPhotos,
  exportFavorites,
} = require('../controllers/db.controller');

module.exports = router
  .get('/export/users', exportUsers)
  .get('/export/categories', exportCategories)
  .get('/export/subcategories', exportSubcategories)
  .get('/export/items', exportItems)
  .get('/export/photos', exportPhotos)
  .get('/export/favorites', exportFavorites);
