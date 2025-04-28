"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Accion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Accion.init(
    {
      nombre: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Accion",
      tableName: "acciones",
      timestamps: true,
    }
  );
  return Accion;
};
