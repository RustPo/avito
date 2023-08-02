'use strict';

    /** @type {import('sequelize').QueryInterface} */
    module.exports = {
      async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Photos', [
  {
    "url": "http://localhost:3000/uploads/image-1689681138155.jpeg",
    "path": "public/uploads/image-1689681138155.jpeg",
    "itemId": 1
  },
  {
    "url": "http://localhost:3000/uploads/image-1689681138156.jpeg",
    "path": "public/uploads/image-1689681138156.jpeg",
    "itemId": 1
  },
  {
    "url": "http://localhost:3000/uploads/image-1689681138157.jpeg",
    "path": "public/uploads/image-1689681138157.jpeg",
    "itemId": 1
  },
  {
    "url": "http://localhost:3000/uploads/image-1689681281689.jpeg",
    "path": "public/uploads/image-1689681281689.jpeg",
    "itemId": 2
  },
  {
    "url": "http://localhost:3000/uploads/image-1689681281690.jpeg",
    "path": "public/uploads/image-1689681281690.jpeg",
    "itemId": 2
  },
  {
    "url": "http://localhost:3000/uploads/image-1689681699422.jpeg",
    "path": "public/uploads/image-1689681699422.jpeg",
    "itemId": 3
  },
  {
    "url": "http://localhost:3000/uploads/image-1689681826238.jpeg",
    "path": "public/uploads/image-1689681826238.jpeg",
    "itemId": 4
  },
  {
    "url": "http://localhost:3000/uploads/image-1689682068154.jpeg",
    "path": "public/uploads/image-1689682068154.jpeg",
    "itemId": 5
  },
  {
    "url": "http://localhost:3000/uploads/image-1689682068154.jpeg",
    "path": "public/uploads/image-1689682068154.jpeg",
    "itemId": 5
  },
  {
    "url": "http://localhost:3000/uploads/image-1689682068155.jpeg",
    "path": "public/uploads/image-1689682068155.jpeg",
    "itemId": 5
  },
  {
    "url": "http://localhost:3000/uploads/image-1689682172928.jpeg",
    "path": "public/uploads/image-1689682172928.jpeg",
    "itemId": 6
  },
  {
    "url": "http://localhost:3000/uploads/image-1689682172929.jpeg",
    "path": "public/uploads/image-1689682172929.jpeg",
    "itemId": 6
  },
  {
    "url": "http://localhost:3000/uploads/image-1689682318255.jpeg",
    "path": "public/uploads/image-1689682318255.jpeg",
    "itemId": 7
  },
  {
    "url": "http://localhost:3000/uploads/image-1689682318256.jpeg",
    "path": "public/uploads/image-1689682318256.jpeg",
    "itemId": 7
  },
  {
    "url": "http://localhost:3000/uploads/image-1689682318257.jpeg",
    "path": "public/uploads/image-1689682318257.jpeg",
    "itemId": 7
  },
  {
    "url": "http://localhost:3000/uploads/image-1689683577228.jpeg",
    "path": "public/uploads/image-1689683577228.jpeg",
    "itemId": 8
  },
  {
    "url": "http://localhost:3000/uploads/image-1689683577229.jpeg",
    "path": "public/uploads/image-1689683577229.jpeg",
    "itemId": 8
  },
  {
    "url": "http://localhost:3000/uploads/image-1689683577230.jpeg",
    "path": "public/uploads/image-1689683577230.jpeg",
    "itemId": 8
  },
  {
    "url": "http://localhost:3000/uploads/image-1689683777223.jpeg",
    "path": "public/uploads/image-1689683777223.jpeg",
    "itemId": 9
  },
  {
    "url": "http://localhost:3000/uploads/image-1689683777224.jpeg",
    "path": "public/uploads/image-1689683777224.jpeg",
    "itemId": 9
  },
  {
    "url": "http://localhost:3000/uploads/image-1689683924101.jpeg",
    "path": "public/uploads/image-1689683924101.jpeg",
    "itemId": 10
  },
  {
    "url": "http://localhost:3000/uploads/image-1689683924101.jpeg",
    "path": "public/uploads/image-1689683924101.jpeg",
    "itemId": 10
  },
  {
    "url": "http://localhost:3000/uploads/image-1689684111533.jpeg",
    "path": "public/uploads/image-1689684111533.jpeg",
    "itemId": 11
  },
  {
    "url": "http://localhost:3000/uploads/image-1689684298287.jpeg",
    "path": "public/uploads/image-1689684298287.jpeg",
    "itemId": 12
  },
  {
    "url": "http://localhost:3000/uploads/image-1689684298289.jpeg",
    "path": "public/uploads/image-1689684298289.jpeg",
    "itemId": 12
  },
  {
    "url": "http://localhost:3000/uploads/image-1689684298292.jpeg",
    "path": "public/uploads/image-1689684298292.jpeg",
    "itemId": 12
  },
  {
    "url": "http://localhost:3000/uploads/image-1689844019892.jpeg",
    "path": "public/uploads/image-1689844019892.jpeg",
    "itemId": 13
  },
  {
    "url": "http://localhost:3000/uploads/image-1689844019893.jpeg",
    "path": "public/uploads/image-1689844019893.jpeg",
    "itemId": 13
  },
  {
    "url": "http://localhost:3000/uploads/image-1689844019894.jpeg",
    "path": "public/uploads/image-1689844019894.jpeg",
    "itemId": 13
  },
  {
    "url": "http://localhost:3000/uploads/image-1689844147742.jpeg",
    "path": "public/uploads/image-1689844147742.jpeg",
    "itemId": 14
  },
  {
    "url": "http://localhost:3000/uploads/image-1689844147743.jpeg",
    "path": "public/uploads/image-1689844147743.jpeg",
    "itemId": 14
  },
  {
    "url": "http://localhost:3000/uploads/image-1689844494715.jpeg",
    "path": "public/uploads/image-1689844494715.jpeg",
    "itemId": 15
  },
  {
    "url": "http://localhost:3000/uploads/image-1689844494716.jpeg",
    "path": "public/uploads/image-1689844494716.jpeg",
    "itemId": 15
  },
  {
    "url": "http://localhost:3000/uploads/image-1689844494716.jpeg",
    "path": "public/uploads/image-1689844494716.jpeg",
    "itemId": 15
  },
  {
    "url": "http://localhost:3000/uploads/image-1689844700890.jpeg",
    "path": "public/uploads/image-1689844700890.jpeg",
    "itemId": 16
  },
  {
    "url": "http://localhost:3000/uploads/image-1689844700891.jpeg",
    "path": "public/uploads/image-1689844700891.jpeg",
    "itemId": 16
  },
  {
    "url": "http://localhost:3000/uploads/image-1689844700892.jpeg",
    "path": "public/uploads/image-1689844700892.jpeg",
    "itemId": 16
  },
  {
    "url": "http://localhost:3000/uploads/image-1689846593859.jpeg",
    "path": "public/uploads/image-1689846593859.jpeg",
    "itemId": 17
  },
  {
    "url": "http://localhost:3000/uploads/image-1689846593862.jpeg",
    "path": "public/uploads/image-1689846593862.jpeg",
    "itemId": 17
  },
  {
    "url": "http://localhost:3000/uploads/image-1689846593864.jpeg",
    "path": "public/uploads/image-1689846593864.jpeg",
    "itemId": 17
  },
  {
    "url": "http://localhost:3000/uploads/image-1689846678473.jpeg",
    "path": "public/uploads/image-1689846678473.jpeg",
    "itemId": 18
  },
  {
    "url": "http://localhost:3000/uploads/image-1689846678474.jpeg",
    "path": "public/uploads/image-1689846678474.jpeg",
    "itemId": 18
  },
  {
    "url": "http://localhost:3000/uploads/image-1689846678475.jpeg",
    "path": "public/uploads/image-1689846678475.jpeg",
    "itemId": 18
  },
  {
    "url": "http://localhost:3000/uploads/image-1689846785872.jpeg",
    "path": "public/uploads/image-1689846785872.jpeg",
    "itemId": 19
  },
  {
    "url": "http://localhost:3000/uploads/image-1689846785873.jpeg",
    "path": "public/uploads/image-1689846785873.jpeg",
    "itemId": 19
  },
  {
    "url": "http://localhost:3000/uploads/image-1689846889707.jpeg",
    "path": "public/uploads/image-1689846889707.jpeg",
    "itemId": 20
  },
  {
    "url": "http://localhost:3000/uploads/image-1689846889708.jpeg",
    "path": "public/uploads/image-1689846889708.jpeg",
    "itemId": 20
  },
  {
    "url": "http://localhost:3000/uploads/image-1689846889710.jpeg",
    "path": "public/uploads/image-1689846889710.jpeg",
    "itemId": 20
  },
  {
    "url": "http://localhost:3000/uploads/image-1689847092965.jpeg",
    "path": "public/uploads/image-1689847092965.jpeg",
    "itemId": 21
  },
  {
    "url": "http://localhost:3000/uploads/image-1689847092966.jpeg",
    "path": "public/uploads/image-1689847092966.jpeg",
    "itemId": 21
  },
  {
    "url": "http://localhost:3000/uploads/image-1689862337173.jpeg",
    "path": "public/uploads/image-1689862337173.jpeg",
    "itemId": 22
  },
  {
    "url": "http://localhost:3000/uploads/image-1689862337177.jpeg",
    "path": "public/uploads/image-1689862337177.jpeg",
    "itemId": 22
  },
  {
    "url": "http://localhost:3000/uploads/image-1689862337181.jpeg",
    "path": "public/uploads/image-1689862337181.jpeg",
    "itemId": 22
  },
  {
    "url": "http://localhost:3000/uploads/image-1689862440908.jpeg",
    "path": "public/uploads/image-1689862440908.jpeg",
    "itemId": 23
  },
  {
    "url": "http://localhost:3000/uploads/image-1689862523420.jpeg",
    "path": "public/uploads/image-1689862523420.jpeg",
    "itemId": 24
  },
  {
    "url": "http://localhost:3000/uploads/image-1689862591271.jpeg",
    "path": "public/uploads/image-1689862591271.jpeg",
    "itemId": 25
  },
  {
    "url": "http://localhost:3000/uploads/image-1689862591271.jpeg",
    "path": "public/uploads/image-1689862591271.jpeg",
    "itemId": 25
  },
  {
    "url": "http://localhost:3000/uploads/image-1689862591273.jpeg",
    "path": "public/uploads/image-1689862591273.jpeg",
    "itemId": 25
  },
  {
    "url": "http://localhost:3000/uploads/image-1689862682738.jpeg",
    "path": "public/uploads/image-1689862682738.jpeg",
    "itemId": 26
  },
  {
    "url": "http://localhost:3000/uploads/image-1689862682739.jpeg",
    "path": "public/uploads/image-1689862682739.jpeg",
    "itemId": 26
  },
  {
    "url": "http://localhost:3000/uploads/image-1689862682740.jpeg",
    "path": "public/uploads/image-1689862682740.jpeg",
    "itemId": 26
  },
  {
    "url": "http://localhost:3000/uploads/image-1689863200582.jpeg",
    "path": "public/uploads/image-1689863200582.jpeg",
    "itemId": 27
  },
  {
    "url": "http://localhost:3000/uploads/image-1689863200583.jpeg",
    "path": "public/uploads/image-1689863200583.jpeg",
    "itemId": 27
  },
  {
    "url": "http://localhost:3000/uploads/image-1689863200586.jpeg",
    "path": "public/uploads/image-1689863200586.jpeg",
    "itemId": 27
  },
  {
    "url": "http://localhost:3000/uploads/image-1689863305410.jpeg",
    "path": "public/uploads/image-1689863305410.jpeg",
    "itemId": 28
  },
  {
    "url": "http://localhost:3000/uploads/image-1689863305410.jpeg",
    "path": "public/uploads/image-1689863305410.jpeg",
    "itemId": 28
  },
  {
    "url": "http://localhost:3000/uploads/image-1689863471557.jpeg",
    "path": "public/uploads/image-1689863471557.jpeg",
    "itemId": 29
  },
  {
    "url": "http://localhost:3000/uploads/image-1689863471558.jpeg",
    "path": "public/uploads/image-1689863471558.jpeg",
    "itemId": 29
  },
  {
    "url": "http://localhost:3000/uploads/image-1689863471559.jpeg",
    "path": "public/uploads/image-1689863471559.jpeg",
    "itemId": 29
  },
  {
    "url": "http://localhost:3000/uploads/image-1689863654017.jpeg",
    "path": "public/uploads/image-1689863654017.jpeg",
    "itemId": 30
  },
  {
    "url": "http://localhost:3000/uploads/image-1689863654017.jpeg",
    "path": "public/uploads/image-1689863654017.jpeg",
    "itemId": 30
  },
  {
    "url": "http://localhost:3000/uploads/image-1689865985947.jpeg",
    "path": "public/uploads/image-1689865985947.jpeg",
    "itemId": 31
  },
  {
    "url": "http://localhost:3000/uploads/image-1689865985949.jpeg",
    "path": "public/uploads/image-1689865985949.jpeg",
    "itemId": 31
  },
  {
    "url": "http://localhost:3000/uploads/image-1689866089275.jpeg",
    "path": "public/uploads/image-1689866089275.jpeg",
    "itemId": 32
  },
  {
    "url": "http://localhost:3000/uploads/image-1689866089276.jpeg",
    "path": "public/uploads/image-1689866089276.jpeg",
    "itemId": 32
  },
  {
    "url": "http://localhost:3000/uploads/image-1689866470805.jpeg",
    "path": "public/uploads/image-1689866470805.jpeg",
    "itemId": 33
  },
  {
    "url": "http://localhost:3000/uploads/image-1689866470806.jpeg",
    "path": "public/uploads/image-1689866470806.jpeg",
    "itemId": 33
  },
  {
    "url": "http://localhost:3000/uploads/image-1689866613436.jpeg",
    "path": "public/uploads/image-1689866613436.jpeg",
    "itemId": 34
  },
  {
    "url": "http://localhost:3000/uploads/image-1689866613437.jpeg",
    "path": "public/uploads/image-1689866613437.jpeg",
    "itemId": 34
  },
  {
    "url": "http://localhost:3000/uploads/image-1689867330173.jpeg",
    "path": "public/uploads/image-1689867330173.jpeg",
    "itemId": 35
  },
  {
    "url": "http://localhost:3000/uploads/image-1689867330173.jpeg",
    "path": "public/uploads/image-1689867330173.jpeg",
    "itemId": 35
  },
  {
    "url": "http://localhost:3000/uploads/image-1689867677399.jpeg",
    "path": "public/uploads/image-1689867677399.jpeg",
    "itemId": 36
  },
  {
    "url": "http://localhost:3000/uploads/image-1689867677400.jpeg",
    "path": "public/uploads/image-1689867677400.jpeg",
    "itemId": 36
  },
  {
    "url": "http://localhost:3000/uploads/image-1689867886643.jpeg",
    "path": "public/uploads/image-1689867886643.jpeg",
    "itemId": 37
  },
  {
    "url": "http://localhost:3000/uploads/image-1689867886643.jpeg",
    "path": "public/uploads/image-1689867886643.jpeg",
    "itemId": 37
  },
  {
    "url": "http://localhost:3000/uploads/image-1689867963963.jpeg",
    "path": "public/uploads/image-1689867963963.jpeg",
    "itemId": 38
  },
  {
    "url": "http://localhost:3000/uploads/image-1689867963963.jpeg",
    "path": "public/uploads/image-1689867963963.jpeg",
    "itemId": 38
  }
], {});
      },

      async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Photos', null, {});
      },
    };
    