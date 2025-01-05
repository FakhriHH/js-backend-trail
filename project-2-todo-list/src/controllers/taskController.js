const Task = require('../models/taskModel');

exports.createTask = async (req, res) => {
    try {
        const { title, description, deadline, category } = req.body;
        if (!title) return res.status(400).json({ error: 'Title is required' });
  
        const [id] = await Task.create({ title, description, deadline, category, completed: false });
        res.status(201).json({ id, message: 'Task created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create task' });
    }
};

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
};

exports.getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        if (!task) return res.status(404).json({ error: 'Task not found' });
  
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch task' });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, deadline, category, completed } = req.body;
  
        const updated = await Task.update(id, { title, description, deadline, category, completed });
        if (!updated) return res.status(404).json({ error: 'Task not found' });
  
        res.status(200).json({ message: 'Task updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update task' });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
  
        const deleted = await Task.delete(id);
        if (!deleted) return res.status(404).json({ error: 'Task not found' });
  
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete task' });
    }
};