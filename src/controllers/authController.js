import db from '../models/index.js';
const { usuario, rol } = db;
import { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
const { secretKey } = process.env;
export async function registro(req, res) {
    try {
        const { nombre, email, contraseña } = req.body;
        // Hash de la contraseña
        const hashedPassword = await hash(contraseña, 10);
        // Crear usuario
        const newUsuario = await usuario.create({
            nombre,
            email,
            contraseña: hashedPassword,
        });
        // Asignar rol predeterminado
        const rol = await rol.findOne({ where: { nombre: 'usuario regular' } });
        await newUsuario.addRol(rol);
            res.status(201).json({ message: 'Usuario registrado con éxito' });
    } catch (error) {
            res.status(500).json({ error: 'Error en el registro' });
    }
}

export async function login(req, res) {
    // Implementa la lógica de inicio de sesión aquí

}