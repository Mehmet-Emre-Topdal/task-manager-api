import { errorResponse } from '../utils/responseFormatter.js';

export const notFoundHandler = (req, res, next) => {
    res.status(404).json(errorResponse('Resource not found', 404));
};

export const globalErrorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';

    res.status(statusCode).json(errorResponse(message, statusCode));
};
