// backend/routes/productRoutes.js

const express = require('express');
const router = express.Router();
const { getProducts, getProductById, createProduct } = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');

// Get all products
router.get('/', getProducts);

// Get single product
router.get('/:id', getProductById);

// Create product (Admin)
router.post('/', protect, admin, createProduct);

module.exports = router;
