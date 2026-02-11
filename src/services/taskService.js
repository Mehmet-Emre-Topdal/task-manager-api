class TaskService {
    constructor() {
        this.tasks = [];
        this.currentId = 1;
    }

    async createTask(taskData) {
        const newTask = {
            id: this.currentId++,
            title: taskData.title,
            completed: taskData.completed || false,
            createdAt: taskData.createdAt || new Date()
        };

        this.tasks.push(newTask);
        return newTask;
    }

    async getAllTasks() {
        return this.tasks;
    }
}

export default new TaskService();
