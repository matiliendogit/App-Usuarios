import { Router } from 'express';
import { getAllUsers, getUserById } from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
const router = Router();
router.get('/', authMiddleware, getAllUsers);
router.get('/:id', authMiddleware, getUserById);
export default router;