"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class PermisoAccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PermisoAccion.init(
    {
      permiso_id: DataTypes.INTEGER,
      accion_id: DataTypes.INTEGER,
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
      modelName: "PermisoAccion",
      tableName: "permisos_acciones",
      timestamps: true,
    }
  );
  return PermisoAccion;
};
