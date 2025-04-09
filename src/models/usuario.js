'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuario.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  }, {
    sequelize,
    modelName: 'usuario',
  });

  usuario.associate = function (models) {
    usuario.belongsToMany(models.rol, {
      through: 'usuario_rol',
      foreignKey: 'usuarioId',
      otherKey: 'rolId',
    });
  };
  return usuario;
};