'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Locations', [{
        number: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        number: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 26,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {returning: true});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Locations', null, {});

  }
};