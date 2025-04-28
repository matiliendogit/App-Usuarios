import db from '../models/index.js'; // Asegúrate de que la ruta sea correcta
try {
  await db.sequelize.authenticate();
  console.log('✅ Conexión a la base de datos establecida correctamente.');
} catch (error) {
  console.error('❌ Error al conectar con la base de datos:', error);
}

const { usuario } = db;

//Obtener todos los usuarios
export const getAllUsers = async (req, res) => {
    try {
        const users = await usuario.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
  };

// Obetener un usuario por ID
export const getUserById = async (req, res) =>{
  req.params.id = parseInt(req.params.id); 

  if(isNaN(req.params.id)) return res.status(400).json({ error: 'ID no válido' });
  
  try{
    const users = await usuario.findOneByPk(req.params.id);
    if(!users) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.status(200).json(users);

  }catch(error){
    console.error('Error al obtener el usuario:', error);
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
}

