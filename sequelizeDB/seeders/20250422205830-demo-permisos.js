"use strict";
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert("permisos", [
    {
      nombre: "GESTIONAR_USUARIOS",
      descripcion: "Puede gestionar usuarios",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nombre: "GESTIONAR_PRODUCTOS",
      descripcion: "Puede gestionar productos",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("permisos", null, {});
}
