import express from 'express';
import { getReviewsByProduct, createReview } from '../controllers/reviewController';

const router = express.Router();

// GET /api/reviews/product/:productId
// router.get('/product/:productId', getReviewsByProduct);
router.get('/', getReviewsByProduct);

// POST /api/reviews/product/:productId
router.post('/product/:productId', createReview);

export default router;