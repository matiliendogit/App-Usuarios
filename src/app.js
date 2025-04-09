import express from 'express';
import dotenv from 'dotenv';
import { sync } from './config/database.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config(); // Cargar variables de entorno

const app = express();

// Middlewares
app.use(express.json()); // Ya no necesitás importar { json } separado

// Rutas
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

// Manejador de errores
app.use(errorHandler);

// Sincronización y arranque del servidor
sync().then(() => {
 app.listen(3000, () => {
    console.log('✅ Servidor corriendo en http://localhost:3000');
  });
}).catch((err) => {
  console.error('❌ Error al sincronizar la base de datos:', err);
});
app.listen(3000, () => {
  console.log('✅ Servidor corriendo en http://localhost:3000');
});