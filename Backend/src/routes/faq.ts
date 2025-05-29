import express from 'express';
import { getAllFAQs } from '../controllers/faqController';

const router = express.Router();

// GET /api/faqs
router.get('/', getAllFAQs);

export default router;