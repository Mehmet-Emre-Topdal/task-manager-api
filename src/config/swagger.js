import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Mangolab Task Management API',
            version: '1.0.0',
            description: 'A professional Task Management API built with Express.js and clean architecture principles',
            contact: {
                name: 'API Support',
                email: 'support@mangolab.com'
            },
            license: {
                name: 'ISC',
                url: 'https://opensource.org/licenses/ISC'
            }
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server'
            },
            {
                url: 'https://api.mangolab.com',
                description: 'Production server'
            }
        ],
        tags: [
            {
                name: 'Tasks',
                description: 'Task management endpoints'
            }
        ],
        components: {
            schemas: {
                Task: {
                    type: 'object',
                    required: ['title'],
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'Auto-generated task ID',
                            example: 1
                        },
                        title: {
                            type: 'string',
                            description: 'Task title',
                            minLength: 3,
                            maxLength: 100,
                            example: 'Complete project documentation'
                        },
                        completed: {
                            type: 'boolean',
                            description: 'Task completion status',
                            default: false,
                            example: false
                        },
                        createdAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'Task creation timestamp',
                            example: '2026-02-11T20:00:00.000Z'
                        }
                    }
                },
                TaskInput: {
                    type: 'object',
                    required: ['title'],
                    properties: {
                        title: {
                            type: 'string',
                            description: 'Task title',
                            minLength: 3,
                            maxLength: 100,
                            example: 'Complete project documentation'
                        },
                        completed: {
                            type: 'boolean',
                            description: 'Task completion status',
                            default: false,
                            example: false
                        },
                        createdAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'Task creation timestamp',
                            example: '2026-02-11T20:00:00.000Z'
                        }
                    }
                },
                SuccessResponse: {
                    type: 'object',
                    properties: {
                        success: {
                            type: 'boolean',
                            example: true
                        },
                        message: {
                            type: 'string',
                            example: 'Operation successful'
                        },
                        data: {
                            type: 'object'
                        }
                    }
                },
                ErrorResponse: {
                    type: 'object',
                    properties: {
                        success: {
                            type: 'boolean',
                            example: false
                        },
                        message: {
                            type: 'string',
                            example: 'Error message'
                        },
                        statusCode: {
                            type: 'integer',
                            example: 400
                        }
                    }
                },
                ValidationErrorResponse: {
                    type: 'object',
                    properties: {
                        success: {
                            type: 'boolean',
                            example: false
                        },
                        message: {
                            type: 'string',
                            example: 'Validation failed'
                        },
                        statusCode: {
                            type: 'integer',
                            example: 400
                        },
                        errors: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    field: {
                                        type: 'string',
                                        example: 'title'
                                    },
                                    message: {
                                        type: 'string',
                                        example: 'Title must be at least 3 characters'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    apis: ['./src/routes/*.js']
};

export const swaggerSpec = swaggerJsdoc(options);
