"use strict";
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert("usuarios_roles", [
    {
      usuario_id: 13,
      rol_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      usuario_id: 14,
      rol_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      usuario_id: 15,
      rol_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      usuario_id: 13,
      rol_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("usuarios_roles", null, {});
}
