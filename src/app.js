import express, { json } from 'express';
import { config } from 'dotenv';
import { sync } from './config/database.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import { errorHandler } from './middlewares/errorHandler.js';
config();
const app = express();
app.use(json());
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use(errorHandler);
sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Servidor en funcionamiento en el puerto 3000');
    });
});
