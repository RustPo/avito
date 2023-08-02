const router = require('express').Router();

const {
  getPhotosByItemId,
  setPhoto,
  deletePhoto,
} = require('../controllers/photo.controller');

module.exports = router
  .get('/:itemId', getPhotosByItemId)
  .post('/:itemId', setPhoto)
  .delete('/:id', deletePhoto);
