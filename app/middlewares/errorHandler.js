export const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    const errors = err.errors || [];

    // Log the error (optional)
    console.error(`[Error] ${statusCode} - ${message}`);
    if (errors.length) {
        console.error(errors);
    }

    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message,
        errors,
    });
};

// GraphQL Error Handler
export const formatGraphQLError = (err) => {
    const statusCode = err.extensions?.exception?.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    const errors = err.extensions?.exception?.errors || [];

    // Log the error (optional)
    console.error(`[GraphQL Error] ${statusCode} - ${message}`);
    if (errors.length) {
        console.error(errors);
    }

    return {
        message,
        statusCode,
        errors,
    };
};
