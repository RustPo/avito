const router = require('express').Router();
const {
  signUp,
  signIn,
  signOut,
  checkUser,
  getUsers,
} = require('../controllers/auth.controller');

module.exports = router
  .post('/signup', signUp)
  .post('/signin', signIn)
  .get('/signout', signOut)
  .get('/users', getUsers)
  .get('/check', checkUser);
