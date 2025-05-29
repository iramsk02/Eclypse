import { Request, Response } from 'express';
import FAQ from '../models/FAQ';

export const getAllFAQs = async (req: Request, res: Response) => {
  try {
    const faqs = await FAQ.find().sort({ order: 1, createdAt: 1 });
    
    res.json({
      success: true,
      data: faqs,
      count: faqs.length
    });
  } catch (error) {
    console.error('Get FAQs error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching FAQs'
    });
  }
};
