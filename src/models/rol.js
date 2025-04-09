'use strict';
import { Model } from 'sequelize';   
export default (sequelize, DataTypes) => {
  class rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rol.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
  }, {
    sequelize,
    modelName: 'rol',
  });

  rol.associate = function (models) {
    rol.belongsToMany(models.usuario, {
      through: 'usuario_rol',
      foreignKey: 'rolId',
      otherKey: 'usuarioId',
    });
  };
  return rol;
};