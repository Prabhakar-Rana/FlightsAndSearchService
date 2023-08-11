'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('Airports', [
       {
         name: "Kempengorda internation Airport",
         cityId: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         name: "Mysore Airport",
         cityId: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         name: "Mengaluru internation Airport",
         cityId: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         name: "Indra-gandhi internation Airport",
         cityId: 32,
         createdAt: new Date(),
         updatedAt: new Date()
       }
     ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
