'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Locations', [{
        // id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 14,
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        // id: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 26,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Locations', null, {});

  }
};