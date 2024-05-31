import express from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController.js';
import { userValidator } from '../validators/userValidator.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', userValidator, createUser);
router.put('/:id', userValidator, updateUser);
router.delete('/:id', deleteUser);

export default router;