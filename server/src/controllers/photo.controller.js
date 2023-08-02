require('dotenv').config();
const { Photo } = require('../../db/models');

module.exports.getPhotosByItemId = async (req, res) => {
  const { itemId } = req.params;
  try {
    const photos = await Photo.findAll({ where: { itemId }, raw: true });
    res.json(photos);
  } catch (error) {
    res.status(400).json({ error: 'Failed to get photos.' });
  }
};

module.exports.setPhoto = async (req, res) => {
  const { itemId } = req.params;
  const { url } = req.body;
  try {
    const photo = await Photo.create({ itemId, url });
    res.json(photo);
  } catch (error) {
    res.status(400).json({ error: 'Failed to get photos.' });
  }
};

module.exports.deletePhoto = async (req, res) => {
  const { id } = req.params;

  try {
    const photo = await Photo.destroy({ where: { id }, individualHooks: true });
    res.json({ id });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete photos.' });
  }
};
