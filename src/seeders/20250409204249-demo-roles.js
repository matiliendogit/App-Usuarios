'use strict';

/** @type {import('sequelize-cli').Migration} */

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('rols', [
    {
      nombre: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nombre: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nombre: 'moderador',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('rols', null, {});
}
