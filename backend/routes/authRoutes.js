// // backend/routes/authRoutes.js

// const express = require('express');
// const router = express.Router();
// const { registerUser, authUser } = require('../controllers/authController');

// // Register User
// router.post('/signup', registerUser);

// // Login User
// router.post('/login', authUser);

// module.exports = router;


// backend/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const { registerUser, authUser } = require('../controllers/authController');

// Register User
router.post('/register', registerUser);

// Login User
router.post('/login', authUser);

module.exports = router;
