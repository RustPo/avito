require('dotenv').config();
const { Op, Sequelize } = require('sequelize');
const { Item, Photo } = require('../../db/models');

module.exports.getItemsByTitle = async (req, res) => {
  const { inputTitle } = req.query;
  function upper(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  try {
    const arrItems = await Item.findAll({
      order: [[{ model: Photo }, 'id', 'DESC']],
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
    if (!arrItems.length) return res.status(200).json([]);

    const filterArrItem = arrItems.filter(({ title }) =>
      title.toLowerCase().includes(inputTitle.toLowerCase()),
    );

    res.status(200).json(filterArrItem);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
  res.end();
};
