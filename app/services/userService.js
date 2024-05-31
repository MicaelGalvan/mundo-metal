import { findAll, findById, findByEmail, create } from '../repositories/userRepository.js';
import { ValidationError, NotFoundError } from '../errors/index.js';
import { hashPassword } from '../utils/hashUtils';

const getAllUsers = async () => {
    return await findAll();
};

const getUserById = async (id) => {
    const user = await findById(id);
    if (!user) {
        throw new NotFoundError('User not found');
    }
    return user;
};

const createUser = async (userData) => {
    const existingUser = await findByEmail(userData.email);
    if (existingUser) {
        throw new ValidationError('Email is already in use');
    }
    const hashedPassword = await hashPassword(userData.password);
    const user = {
        ...userData,
        password: hashedPassword,
    };
    return await create(user);
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
};
