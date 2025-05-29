import express from 'express';
import { createOrder, getOrderById } from '../controllers/orderController';

const router = express.Router();

// POST /api/orders
router.post('/',createOrder);

// GET /api/orders/:id
router.get('/:id', getOrderById);

// export default router;
export default router;