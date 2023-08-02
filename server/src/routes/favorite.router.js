const router = require('express').Router();
const {
  getFavorites,
  getFavoritesByUserId,
  getFavoritesByItemId,
  setFavorite,
  deleteFavoriteById,
  getFavoritesCountByUserId,
} = require('../controllers/favorite.controller');

module.exports = router
  .get('/', getFavorites)
  .delete('/', deleteFavoriteById)
  .get('/user/:userId', getFavoritesByUserId)
  .get('/item/:itemId', getFavoritesByItemId)
  .get('/count/:userId', getFavoritesCountByUserId)
  .post('/user/:userId', setFavorite);
