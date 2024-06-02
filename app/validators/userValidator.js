import { body } from 'express-validator';

export const userValidator = [
  body('email').isEmail().withMessage('Invalid email address'),
  body('name').notEmpty().withMessage('Name is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];
