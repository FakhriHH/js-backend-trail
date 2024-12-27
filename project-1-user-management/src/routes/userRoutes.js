const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateUser } = require('../middleware/validationMiddleware');
const authController = require('../controllers/authController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/', validateUser, userController.createUser);

router.post('/login', authController.login);

router.post('/', authenticateToken, userController.createUser);
router.get('/', authenticateToken, userController.getAllUsers); 
router.get('/:id', authenticateToken, userController.getUserById); 
router.put('/:id', authenticateToken, userController.updateUser); 
router.delete('/:id', authenticateToken, userController.deleteUser); 

module.exports = router;
