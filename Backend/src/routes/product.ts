import express from 'express';
import { getAllProducts, getProductById, createProduct } from '../controllers/productController';

const router = express.Router();

// GET /api/products
router.get('/', getAllProducts);

// GET /api/products/:id
router.get('/:id', getProductById);

// POST /api/products (for admin)
router.post('/', createProduct);

export default router;