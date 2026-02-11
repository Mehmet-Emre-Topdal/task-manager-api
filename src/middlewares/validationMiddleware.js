import { errorResponse } from '../utils/responseFormatter.js';

export const validate = (schema) => async (req, res, next) => {
    try {
        const validatedData = await schema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        });

        req.body = validatedData;
        next();
    } catch (error) {
        const validationErrors = error.inner?.map(err => ({
            field: err.path,
            message: err.message
        })) || [{ message: error.message }];

        return res.status(400).json({
            ...errorResponse('Validation failed', 400),
            errors: validationErrors
        });
    }
};
