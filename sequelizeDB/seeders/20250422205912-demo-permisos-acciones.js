"use strict";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert("permisos_acciones", [
    {
      permiso_id: 1,
      accion_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      permiso_id: 1,
      accion_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      permiso_id: 2,
      accion_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("permisos_acciones", null, {});
}
