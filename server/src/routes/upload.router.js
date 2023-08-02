require('dotenv').config();
const express = require('express');
const multer = require('multer');
const { promisify } = require('util');
const { Photo, User } = require('../../db/models');
const URL = `${process.env.HOST}:${process.env.PORT}`;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, 'image-' + Date.now() + '.' + file.mimetype.split('/')[1]);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const router = express.Router();
const upload = multer({ storage: storage, fileFilter: fileFilter });

const uploadArrayAsync = promisify(upload.array('images', 10));

module.exports = router.post('/', async (req, res, next) => {
  const { itemId, userId } = req.query;
  try {
    await uploadArrayAsync(req, res);
    const filesData = req.files;
    if (filesData) {
      // photos
      if (itemId) {
        const files = filesData.map((file) => {
          return {
            url: `${URL}/uploads/${file.filename}`,
            path: file.path,
            itemId,
          };
        });
        try {
          const createdPhotos = await Photo.bulkCreate(files);
          res.json(createdPhotos);
        } catch (error) {
          console.error('Error creating photos:', error);
          res.status(500).send('An error occurred');
        }
      }
      // avatar
      if (userId) {
        const file = filesData[0];
        const url = `${URL}/uploads/${file.filename}`;
        const path = file.path;
        try {
          const avatar = await User.update(
            { avatarUrl: url, avatarPath: path },
            { where: { id: userId }, individualHooks: true },
          );
          res.json({ userId, url, path });
        } catch (error) {
          console.error('Error creating avatar:', error);
          res.status(500).send('An error occurred');
        }
      }
    } else {
      const error = new Error('Please choose files');
      error.httpStatusCode = 400;
      return next(error);
    }
  } catch (error) {
    console.error('Error uploading files:', error);
    res.status(500).send('An error occurred');
  }
});
