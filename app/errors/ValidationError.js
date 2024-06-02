import { CustomError } from './CustomError.js';

export class ValidationError extends CustomError {
    constructor(message = 'Validation Error', errors = []) {
        super(message, 400, errors);
    }
}
