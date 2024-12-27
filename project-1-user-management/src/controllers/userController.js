const knex = require('../database/knex');
const bcrypt = require('bcrypt');

// Create User
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Enkripsi password sebelum disimpan
    const hashedPassword = await bcrypt.hash(password, 10);

    const [id] = await knex('users').insert({ name, email, password: hashedPassword });
    res.status(201).json({ id, message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user', details: error.message });
  }
};

// Get All Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await knex('users').select('*');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users', details: error.message });
  }
};

// Get User by ID
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await knex('users').where({ id }).first();
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user', details: error.message });
  }
};

// Update User
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const updatedRows = await knex('users').where({ id }).update({ name, email, password });
    if (!updatedRows) return res.status(404).json({ error: 'User not found' });
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user', details: error.message });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRows = await knex('users').where({ id }).del();
    if (!deletedRows) return res.status(404).json({ error: 'User not found' });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user', details: error.message });
  }
};
