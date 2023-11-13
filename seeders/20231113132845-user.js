"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        name: "Ariel",
        email: "ariel@gmail.com",
        password: "123",
        contact: "085389899996",
        address: "Jalan Silo",
      },
      {
        name: "Udin",
        email: "udin@gmail.com",
        password: "12345",
        contact: "085389899385",
        address: "Jalan Pulau Semama",
      },
      {
        name: "Gege",
        email: "gege@gmail.com",
        password: "123442",
        contact: "085389836459",
        address: "Jalan Gatot Subroto"
      }
    ]);
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
