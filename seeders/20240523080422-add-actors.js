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

    await queryInterface.bulkInsert('Actors', [{
      firstName: "Azmi",
      lastName: "Yushari",
      email: "azmi@gmail.com",
      role: "Prince",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Kenny",
      lastName: "Hoii",
      email: "kenny@gmail.com",
      role: "Prime minister",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {})
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
