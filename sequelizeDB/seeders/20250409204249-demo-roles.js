"use strict";

/** @type {import('sequelize-cli').Migration} */

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert("roles", [
    {
      nombre: "admin",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nombre: "user",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nombre: "moderador",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("roles", null, {}); //
}
