import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'app_users_db',
  'matidev',
  '1234',
  {
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false
  }
);

// Función para sincronizar modelos
export const sync = async () => {
  try {
    await sequelize.sync({ force: false }); // Usamos 'sequelize', no 'db'
    console.log('Base de datos sincronizada.');
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
};

export default sequelize;











/*import { Sequelize } from 'sequelize';

// Instancia de Sequelize con variables de entorno
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

// Función para sincronizar modelos
export const sync = async () => {
  try {
    await sequelize.sync({ force: false }); // Usamos 'sequelize', no 'db'
    console.log('Base de datos sincronizada.');
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
};

// Exportamos la instancia para usarla en los modelos
export default sequelize;*/
