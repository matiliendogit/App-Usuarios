"use strict";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert("roles_permisos", [
    {
      rol_id: 1,
      permiso_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      rol_id: 1,
      permiso_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      rol_id: 2,
      permiso_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("rol_permisos", null, {});
}
