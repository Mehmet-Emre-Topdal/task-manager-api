import taskService from '../services/taskService.js';
import { successResponse } from '../utils/responseFormatter.js';

export const createTask = async (req, res, next) => {
    try {
        const task = await taskService.createTask(req.body);
        res.status(201).json(successResponse(task, 'Task created successfully'));
    } catch (error) {
        next(error);
    }
};

export const getAllTasks = async (req, res, next) => {
    try {
        const tasks = await taskService.getAllTasks();
        res.status(200).json(successResponse(tasks, 'Tasks retrieved successfully'));
    } catch (error) {
        next(error);
    }
};
