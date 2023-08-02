require('dotenv').config();
const { Sequelize, Op } = require('sequelize');
const { Favorite, Item, Photo } = require('../../db/models');

module.exports.getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.findAll({
      include: [
        {
          model: Item,
          include: [
            {
              model: Photo,
              where: Sequelize.literal('"Item->Photos"."itemId" = "Item"."id"'),
              required: false,
            },
          ],
        },
      ],
      raw: false,
      nest: true,
    });
    res.json(favorites);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Failed to get favorites.' });
  }
};

// TODO починить сортировку фоток=
module.exports.getFavoritesByUserId = async (req, res) => {
  console.log(1111);
  const { userId } = req.params;
  try {
    const favorites = await Favorite.findAll({
      // order: [['id', 'DESC']],
      order: [
        ['id', 'DESC'],
        [
          { model: Item, as: 'Item' },
          { model: Photo, as: 'Photos' },
          'id',
          'DESC',
        ],
      ],
      where: { userId },
      include: [
        {
          model: Item,
          include: [
            {
              model: Photo,
              where: Sequelize.literal('"Item->Photos"."itemId" = "Item"."id"'),
              required: false,
            },
          ],
        },
      ],
      raw: false,
      nest: true,
    });

    res.json(favorites);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Failed to get favorites.' });
  }
};

module.exports.getFavoritesByItemId = async (req, res) => {
  const { itemId } = req.params;
  try {
    const favorites = await Favorite.findAll({
      where: { itemId },
      include: [{ model: Item }],
      raw: true,
      nest: true,
    });
    res.json(favorites);
  } catch (error) {
    res.status(400).json({ error: 'Failed to get favorites.' });
  }
};

module.exports.setFavorite = async (req, res) => {
  const { userId } = req.params;
  const { itemId } = req.body;
  try {
    const favorite = (await Favorite.create({ userId, itemId })).get({
      plain: true,
    });

    if (favorite) {
      await Item.update(
        { favorites: Sequelize.literal('favorites + 1') },
        { where: { id: itemId } },
      );
    }

    res.json(favorite);
  } catch (error) {
    console.log(error);

    res.status(400).json({ error: 'Failed to set favorite.' });
  }
};

module.exports.deleteFavoriteById = async (req, res) => {
  const { userId, itemId } = req.query;
  try {
    const favorite = await Favorite.destroy({ where: { userId, itemId } });
    if (favorite) {
      await Item.update(
        { favorites: Sequelize.literal('GREATEST(favorites - 1, 0)') },
        { where: { id: itemId } },
      );
      res.json(itemId);
    } else {
      res.status(400).json({ error: `favoriteId ${id} not found` });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Failed to set favorite.' });
  }
};

module.exports.getFavoritesCountByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    // const favoritesCount = await Item.count({
    //   where: { userId, isActive: true, favorites: { [Op.gt]: 0 } },
    //   raw: true,
    // });
    const favoritesCount = await Favorite.count({
      include: [
        {
          model: Item,
          where: { isActive: true },
        },
      ],
      where: { userId },
      raw: true,
    });

    console.log({ userId, favoritesCount });
    res.json({ userId, favoritesCount });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Failed to getFavoritesCountByUserId.' });
  }
};
