"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("acciones", [
      {
        nombre: "CREAR",
        descripcion: "Crear registros",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nombre: "EDITAR",
        descripcion: "Editar registros",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nombre: "ELIMINAR",
        descripcion: "Eliminar registros",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("acciones", null, {});
  },
};
