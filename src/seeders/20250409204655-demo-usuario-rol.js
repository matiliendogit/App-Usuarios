'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('usuario_rol', [
    {
      usuarioId: 1,
      rolId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      usuarioId: 2,
      rolId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      usuarioId: 3,
      rolId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      usuarioId: 1,
      rolId: 3, // Matías tiene admin y moderador
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('usuario_rol', null, {});
}
