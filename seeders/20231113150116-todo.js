'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Todos', [
      {
        value: "Belajar express",
        user_id: 3
      },
      {
        value: "Membuat API dengan Express",
        user_id: 2
      },
      {
        value: "Authentication in Express",
        user_id: 3
      },
      {
        value: "Express.js: RESTful APIs",
        user_id: 2
      },
      {
        value: "Asynchronous Programming in Express",
        user_id: 1
      }      
    ]);
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
