import { CustomError } from './CustomError.js';

export class NotFoundError extends CustomError {
    constructor(message = 'Resource not found', errors = []) {
        super(message, 404, errors);
    }
}
