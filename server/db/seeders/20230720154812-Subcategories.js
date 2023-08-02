'use strict';

/** @type {import('sequelize').QueryInterface} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Subcategories',
      [
        {
          title: 'Мобильные телефоны',
          url: '/telefony/mobile',
          categoryId: 1,
        },
        {
          title: 'Стационарные телефоны',
          url: '/telefony/statsionarnye_telefoni',
          categoryId: 1,
        },
        {
          title: 'Рации',
          url: '/telefony/ratsiya',
          categoryId: 1,
        },
        {
          title: 'Аксессуары',
          url: '/telefony/aksessuari',
          categoryId: 1,
        },
        {
          title: 'Телевизоры',
          url: '/audio_i_video/televizory',
          categoryId: 2,
        },
        {
          title: 'Акустика колонки',
          url: '/audio_i_video/akustika_kolonki',
          categoryId: 2,
        },
        {
          title: 'Наушники',
          url: '/audio_i_video/naushniki',
          categoryId: 2,
        },
        {
          title: 'Видеокамеры',
          url: '/audio_i_video/videokamery',
          categoryId: 2,
        },
        {
          title: 'Аксессуары',
          url: '/audio_i_video/aksessuari',
          categoryId: 2,
        },
        {
          title: 'Мониторы',
          url: '/tovary_dlya_kompyutera/monitory',
          categoryId: 3,
        },
        {
          title: 'Клавиатуры и мыши',
          url: '/tovary_dlya_kompyutera/klaviatury_i_myshi',
          categoryId: 3,
        },
        {
          title: 'Флэшки и карты памяти',
          url: '/tovary_dlya_kompyutera/fleshki_i_karty_pamyati',
          categoryId: 3,
        },
        {
          title: 'Жёсткие диски',
          url: '/tovary_dlya_kompyutera/zhestkie_diski',
          categoryId: 3,
        },
        {
          title: 'Аксессуары',
          url: '/tovary_dlya_kompyutera/aksessuari',
          categoryId: 3,
        },
        {
          title: 'Игровые приставки',
          url: '/igry_pristavki_i_programmy/igrovye_pristavki',
          categoryId: 4,
        },
        {
          title: 'Игры для приставок',
          url: '/igry_pristavki_i_programmy/igry_dlya_pristavok',
          categoryId: 4,
        },
        {
          title: 'Программы',
          url: '/igry_pristavki_i_programmy/programmy',
          categoryId: 4,
        },
        {
          title: 'Компьютерные игры',
          url: '/igry_pristavki_i_programmy/kompyuternye_igry',
          categoryId: 4,
        },
        {
          title: 'Системные блоки',
          url: '/kompyutery/sistemnye_bloki',
          categoryId: 5,
        },
        {
          title: 'Моноблоки',
          url: '/kompyutery/monobloki',
          categoryId: 5,
        },
        {
          title: 'Ноутбуки',
          url: '/kompyutery/noutbuki',
          categoryId: 5,
        },
        {
          title: 'Пленочные фотоаппараты',
          url: '/fototehnika/plenochnye_fotoapparaty',
          categoryId: 6,
        },
        {
          title: 'Зеркальные фотоаппараты',
          url: '/fototehnika/zerkalnye_fotoapparaty',
          categoryId: 6,
        },
        {
          title: 'Объективы',
          url: '/fototehnika/obektivy',
          categoryId: 6,
        },
        {
          title: 'Планшеты',
          url: '/planshety_i_elektronnye_knigi/planshety',
          categoryId: 7,
        },
        {
          title: 'Электронные книги',
          url: '/planshety_i_elektronnye_knigi/elektronnye_knigi',
          categoryId: 7,
        },
        {
          title: 'Аксессуары',
          url: '/planshety_i_elektronnye_knigi/aksessuari',
          categoryId: 7,
        },
        {
          title: 'Принтеры',
          url: '/orgtehnika_i_rashodniki/printery',
          categoryId: 8,
        },
        {
          title: 'Расходные материалы',
          url: '/orgtehnika_i_rashodniki/rashodnye_materialy',
          categoryId: 8,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Subcategories', null, {});
  },
};
