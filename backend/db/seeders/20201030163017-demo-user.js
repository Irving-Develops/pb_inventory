'use strict';
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'irving.a789@gmail.com',
        username: 'irving',
        admin: true,
        hashedPassword: bcrypt.hashSync('password'),
      },
      // {
      //   email: faker.internet.email(),
      //   username: 'FakeUser1',
      //   hashedPassword: bcrypt.hashSync(faker.internet.password()),
      // },
      // {
      //   email: faker.internet.email(),
      //   username: 'FakeUser2',
      //   hashedPassword: bcrypt.hashSync(faker.internet.password()),
      // },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['irving'] }
    }, {});
  }
};
