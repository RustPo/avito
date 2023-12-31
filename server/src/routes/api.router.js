const router = require('express').Router();
const authRouter = require('./auth.router');
const catRouter = require('./cat.router');
const subcatRouter = require('./subcat.router');
const itemRouter = require('./item.router');
const photoRouter = require('./photo.router');
const favoriteRouter = require('./favorite.router');
const searchRouter = require('./search.router');
const uploadRouter = require('./upload.router');
const dbRouter = require('./db.router');

module.exports = router.use('/auth', authRouter);
module.exports = router.use('/categories', catRouter);
module.exports = router.use('/subcategories', subcatRouter);
module.exports = router.use('/items', itemRouter);
module.exports = router.use('/photos', photoRouter);
module.exports = router.use('/favorites', favoriteRouter);
module.exports = router.use('/search', searchRouter);
module.exports = router.use('/upload', uploadRouter);
module.exports = router.use('/db', dbRouter);
