export class CustomError extends Error {
    constructor(message, statusCode, errors = []) {
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;
    }
}

export class NotFoundError extends CustomError {
    constructor(message = 'Resource not found', errors = []) {
        super(message, 404, errors);
    }
}

export class ValidationError extends CustomError {
    constructor(message = 'Validation Error', errors = []) {
        super(message, 400, errors);
    }
}

// Export additional custom errors as needed
