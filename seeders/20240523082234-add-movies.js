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

    await queryInterface.bulkInsert('Movies', [{
      title: 'The Amazing Spiderman',
      genre: 'Action',
      release_year: '2013',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'The Amazing Spiderman 2',
      genre: 'Action',
      release_year: '2015',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
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
