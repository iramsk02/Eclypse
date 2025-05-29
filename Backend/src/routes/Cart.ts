// routes/cart.ts
import express, { Request, Response } from 'express';
import Cart, { ICart } from '../models/Cart';
import { AddToCart, getCart } from '../controllers/CartController';

const router = express.Router();

// POST /api/cart/add
router.post('/add',AddToCart)
router.get('/get/:userId',getCart)


export default router;

