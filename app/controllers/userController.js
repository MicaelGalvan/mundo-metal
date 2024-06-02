import { getAllUsers, getUserById, createUser, } from '../services/js';
import { validationResult } from 'express-validator';
import { ValidationError, NotFoundError } from '../errors/index.js';

// Fetch all users
export const getUsers = async (req, res, next) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (error) {
        next(error); // Pass the error to the errorHandler middleware
    }
};

// Fetch a single user by ID
export const getUserById = async (req, res, next) => {
    try {
        const user = await getUserById(req.params.id);
        if (!user) {
            throw new NotFoundError('User not found');
        }
        res.json(user);
    } catch (error) {
        next(error);
    }
};

// Create a new user
export const createUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new ValidationError('Validation Error', errors.array());
        }
        const user = await createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

// Update an existing user
export const updateUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new ValidationError('Validation Error', errors.array());
        }
        const user = await updateUser(req.params.id, req.body);
        if (!user) {
            throw new NotFoundError('User not found');
        }
        res.json(user);
    } catch (error) {
        next(error);
    }
};

// Delete a user
export const deleteUser = async (req, res, next) => {
    try {
        const user = await deleteUser(req.params.id);
        if (!user) {
            throw new NotFoundError('User not found');
        }
        res.status(204).send(); // No content
    } catch (error) {
        next(error);
    }
};
