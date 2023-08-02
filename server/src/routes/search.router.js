const router = require('express').Router();
const {getItemsByTitle} = require('../controllers/search.controller');


module.exports = router
  .get('/', getItemsByTitle)