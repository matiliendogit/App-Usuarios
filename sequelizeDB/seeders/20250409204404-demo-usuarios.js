"use strict";

/** @type {import('sequelize-cli').Migration} */

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert("usuarios", [
    {
      nombre: "Matías",
      email: "mati@example.com",
      contraseña: "1234",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nombre: "Lucía",
      email: "lucia@example.com",
      contraseña: "abcd",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nombre: "Carlos",
      email: "carlos@example.com",
      contraseña: "pass123",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("usuarios", null, {});
}
