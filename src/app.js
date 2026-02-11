import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import taskRoutes from './routes/taskRoutes.js';
import { notFoundHandler, globalErrorHandler } from './middlewares/errorMiddleware.js';
import { securityHeaders, apiLimiter } from './middlewares/securityMiddleware.js';
import { swaggerSpec } from './config/swagger.js';

const app = express();

app.use(securityHeaders);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to Mangolab Task Management API',
        version: '1.0.0',
        documentation: '/api-docs',
        endpoints: {
            tasks: '/api/tasks'
        }
    });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'Mangolab API Documentation'
}));

app.use('/api', apiLimiter, taskRoutes);

app.use(notFoundHandler);
app.use(globalErrorHandler);

export default app;
