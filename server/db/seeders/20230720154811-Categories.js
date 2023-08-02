'use strict';

/** @type {import('sequelize').QueryInterface} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          title: 'Телефоны',
          url: 'telefony',
        },
        {
          title: 'Аудио и видео',
          url: 'audio_i_video',
        },
        {
          title: 'Товары для компьютера',
          url: 'tovary_dlya_kompyutera',
        },
        {
          title: 'Игры, приставки и программы',
          url: 'igry_pristavki_i_programmy',
        },
        {
          title: 'Компьютеры',
          url: 'kompyutery',
        },
        {
          title: 'Фототехника',
          url: 'fototehnika',
        },
        {
          title: 'Планшеты и электронные книги',
          url: 'planshety_i_elektronnye_knigi',
        },
        {
          title: 'Оргтехника и расходники',
          url: 'orgtehnika_i_rashodniki',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
