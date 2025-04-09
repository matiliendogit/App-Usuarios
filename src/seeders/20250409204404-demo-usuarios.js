'use strict';

/** @type {import('sequelize-cli').Migration} */

export async function up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {
        nombre: 'Matías',
        email: 'mati@example.com',
        contraseña: '1234',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Lucía',
        email: 'lucia@example.com',
        contraseña: 'abcd',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Carlos',
        email: 'carlos@example.com',
        contraseña: 'pass123',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  }
  
  export async function down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
