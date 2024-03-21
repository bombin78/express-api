const express = require('express');
const router = express.Router();
const { UserController } = require("../controllers");
const authenticateToken = require('../middleware/auth');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/current', authenticateToken, UserController.current);
router.get('/:id', authenticateToken, UserController.getUserById);
router.put('/:id', authenticateToken, UserController.updateUser);

module.exports = router;