import * as yup from 'yup';

export const createTaskSchema = yup.object({
    title: yup
        .string()
        .required('Title is required')
        .min(3, 'Title must be at least 3 characters')
        .max(100, 'Title must not exceed 100 characters'),
    completed: yup
        .boolean()
        .default(false),
    createdAt: yup
        .date()
        .default(() => new Date())
});
