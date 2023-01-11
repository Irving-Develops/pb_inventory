'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Keystocks', [{
      part_number: 55584,
      lot_number: 379001061722,
      date_received: '2022-05-17',
      type: 'Plain Keystock Rect',
      quantity: 6,
      measurement: "5/8 X 7/8 X 144",
      uom: "in",
      location_id: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Keystocks', null, {});

  }
};