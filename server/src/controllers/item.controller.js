require('dotenv').config();
const { Sequelize } = require('sequelize');
const { Item, Photo, User } = require('../../db/models');

module.exports.getItems = async (req, res) => {
  let _limit = 0;
  let _page = 0;
  let items = {};
  let pafinationParams = {};

  if (Object.keys(req.query).length > 0) {
    _limit = req.query._limit;
    _page = req.query._page;
  }

  try {
    if (_limit && _page) {
      const limit = parseInt(_limit);
      const page = parseInt(_page);
      const offset = (page - 1) * limit;

      pafinationParams = { limit, offset };
    }
    items = await Item.findAll({
      order: [
        ['id', 'DESC'],
        [{ model: Photo }, 'id', 'DESC'],
      ],
      include: [
        {
          model: Photo,
          where: Sequelize.literal('"Photos"."itemId" = "Item"."id"'),
          required: false,
        },
      ],
      raw: false,
      nest: true,
      ...pafinationParams,
    });

    const totalCount = await Item.count();
    res.header('x-total-count', totalCount).json(items);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Failed to get items.' });
  }
};

module.exports.getItemById = async (req, res) => {
  const { id } = req.params;
  const userId = req.session?.user?.id;
  try {
    const item = await Item.findOne({
      where: { id },
      include: [
        {
          model: User,
          attributes: ['name', 'phone', 'avatarUrl'],
          where: Sequelize.literal('"Item"."userId" = "User"."id"'),
        },
        {
          model: Photo,
          where: Sequelize.literal('"Photos"."itemId" = "Item"."id"'),
          required: false,
        },
      ],
      order: [[{ model: Photo }, 'id', 'DESC']],
      raw: false,
      nest: true,
    });

    if (item.userId !== userId) {
      item.count += 1;
      await item.save();
    }

    res.json(item);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Failed to get item.' });
  }
};

module.exports.getItemsByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const items = await Item.findAll({
      // order: [['id', 'DESC']],
      order: [
        ['id', 'DESC'],
        [{ model: Photo }, 'id', 'DESC'],
      ],
      where: { userId },
      include: [
        {
          model: Photo,
          where: Sequelize.literal('"Photos"."itemId" = "Item"."id"'),
          required: false,
        },
      ],
      raw: false,
      nest: true,
    });
    res.json(items);
  } catch (error) {
    res.status(400).json({ error: 'Failed to get items.' });
  }
};

module.exports.getItemsBySubcategoryId = async (req, res) => {
  const { subcategoryId } = req.params;
  try {
    const items = await Item.findAll({
      order: [['id', 'DESC']],
      where: { subcategoryId },
      include: [
        {
          model: Photo,
          where: Sequelize.literal('"Photos"."itemId" = "Item"."id"'),
          required: false,
        },
      ],
      raw: false,
      nest: true,
    });
    res.json(items);
  } catch (error) {
    res.status(400).json({ error: 'Failed to get items.' });
  }
};

module.exports.setItem = async (req, res) => {
  const { userId } = req.params;
  try {
    const item = (
      await Item.create({
        ...req.body,
        userId,
      })
    ).get({ plain: true });
    res.json(item);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Failed to set item.' });
  }
};

module.exports.updateItem = async (req, res) => {
  const { id } = req.params;

  try {
    const [updatedCount] = await Item.update(
      {
        ...req.body,
      },
      { where: { id } },
    );

    if (updatedCount) {
      res.json(req.body);
    } else {
      res.status(400).json({ error: 'Item has not been updated.' });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Failed to update item.' });
  }
};

module.exports.getItemsByUrl = async (req, res) => {
  const { category, subcategory } = req.params;
  const url = `/${category}/${subcategory}`;
  try {
    const item = await Item.findAll({
      // order: [['id', 'DESC']],
      order: [
        ['id', 'DESC'],
        [{ model: Photo }, 'id', 'DESC'],
      ],
      where: { url },
      include: [
        {
          model: User,
          attributes: ['name', 'phone', 'avatarUrl'],
          where: Sequelize.literal('"Item"."userId" = "User"."id"'),
        },
        {
          model: Photo,
          where: Sequelize.literal('"Photos"."itemId" = "Item"."id"'),
          required: false,
        },
      ],
      raw: false,
      nest: true,
    });
    res.json(item);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Failed to get items bu url.' });
  }
};
