// routes/authRoutes.js
const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { protect, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

// Example protected route
router.get('/admin', protect, authorize('admin'), (req, res) => {
  res.json({ message: 'Admin content' });
});

router.get('/user', protect, authorize('user'), (req, res) => {
  res.json({ message: 'User content' });
});

module.exports = router;
