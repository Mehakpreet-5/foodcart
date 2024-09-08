

// const User = require('../models/User');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// // Generate JWT
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: '30d', // Token valid for 30 days
//   });
// };

// // Register User (For Signup)
// exports.registerUser = async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     // Check if user already exists
//     const userExists = await User.findOne({ email });

//     if (userExists) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash password before saving
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create new user
//     const user = await User.create({
//       username,
//       email,
//       password: hashedPassword,
//     });

//     // Respond with user data and token
//     res.status(201).json({
//       _id: user._id,
//       username: user.username,
//       email: user.email,
//       token: generateToken(user._id),
//     });
//   } catch (error) {
//     console.error('Error in registerUser:', error.message);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// // Login User (For Login)
// exports.authUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Find user by email
//     const user = await User.findOne({ email });

//     // Check if user exists and password matches
//     // if (user && (await bcrypt.compare(password, user.password))) {
//     //   // Respond with user data and token
//     //   res.json({
//     //     _id: user._id,
//     //     username: user.username,
//     //     email: user.email,
//     //     token: generateToken(user._id),
//     //   });
//     // } else {
//     //   // Invalid credentials
//     //   res.status(401).json({ message: 'Invalid Email or Password' });
//     // }
//     if (user && (await bcrypt.compare(password, user.password))) {
//       console.log('User authenticated successfully:', user);
//       res.json({
//         _id: user._id,
//         name: user.username,
//         email: user.email,
//         token: generateToken(user._id),
//       });
//     } else {
//       console.log('Invalid credentials');
//       res.status(401).json({ message: 'Invalid Email or Password' });
//     }
    
//   } catch (error) {
//     console.error('Error in authUser:', error.message);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };


const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Token valid for 30 days
  });
};

// Register User (For Signup)
exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // Respond with user data and token
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error('Error in registerUser:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Login User (For Login)
exports.authUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists and password matches
    if (user && (await bcrypt.compare(password, user.password))) {
      console.log('User authenticated successfully:', user);
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      console.log('Invalid credentials');
      res.status(401).json({ message: 'Invalid Email or Password' });
    }
  } catch (error) {
    console.error('Error in authUser:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};
