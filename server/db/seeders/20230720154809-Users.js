'use strict';

/** @type {import('sequelize').QueryInterface} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Олег',
          email: 'oleg@elbrusboot.camp',
          phone: '+7(909)123-45-67',
          password:
            '$2b$10$yKJKw.xmhTMOAzZsqOd4Z.QZNAapxXhpRlBBLgNB/OKbdk5KoBaoS',
          avatarUrl: 'http://localhost:3000/uploads/image-1689771526912.jpeg',
          avatarPath: 'public/uploads/image-1689771526912.jpeg',
        },
        {
          name: 'Антон',
          email: 'anton@elbrusboot.camp',
          phone: '+7(909)098-76-54',
          password:
            '$2b$10$4tbORqRHu8emAzNrytSdJ.t81uaIRF76XVsTSuJ8jI/YN/tS2o2w2',
          avatarUrl: 'http://localhost:3000/uploads/image-1689845494564.jpeg',
          avatarPath: 'public/uploads/image-1689845494564.jpeg',
        },
        {
          name: 'Света',
          email: 'sveta@elbrusboot.camp',
          phone: '+7(909)544-61-24',
          password:
            '$2b$10$4tbORqRHu8emAzNrytSdJ.t81uaIRF76XVsTSuJ8jI/YN/tS2o2w2',
          avatarUrl: 'http://localhost:3000/uploads/image-1689845580988.png',
          avatarPath: 'public/uploads/image-1689845580988.png',
        },
        {
          name: 'Сергей',
          email: 'dominator@elbrusboot.camp',
          phone: '+7(909)867-37-56',
          password:
            '$2b$10$4tbORqRHu8emAzNrytSdJ.t81uaIRF76XVsTSuJ8jI/YN/tS2o2w2',
          avatarUrl: 'http://localhost:3000/uploads/image-1689845456453.jpeg',
          avatarPath: 'public/uploads/image-1689845456453.jpeg',
        },
        {
          name: 'Денис',
          email: 'denis@elbrusboot.camp',
          phone: '+7(909)234-45-61',
          password:
            '$2b$10$4tbORqRHu8emAzNrytSdJ.t81uaIRF76XVsTSuJ8jI/YN/tS2o2w2',
          avatarUrl: 'http://localhost:3000/uploads/image-1689845647412.jpeg',
          avatarPath: 'public/uploads/image-1689845647412.jpeg',
        },
        {
          name: 'Дмитрий',
          email: 'dima@elbrusboot.camp',
          phone: '+7(909)293-34-84',
          password:
            '$2b$10$4tbORqRHu8emAzNrytSdJ.t81uaIRF76XVsTSuJ8jI/YN/tS2o2w2',
          avatarUrl: 'http://localhost:3000/uploads/image-1689845533934.jpeg',
          avatarPath: 'public/uploads/image-1689845533934.jpeg',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
