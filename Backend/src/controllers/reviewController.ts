import { Request, Response } from 'express';
import CustomerReview from '../models/CustomerReview';

export const getReviewsByProduct = async (req: Request, res: Response) => {
  try {
    // const reviews = await CustomerReview.find({ productId: req.params.productId })
    //   .sort({ createdAt: -1 });
    const reviews=await CustomerReview.find();

    res.json({
      success: true,
      data: reviews,
      count: reviews.length
    });
  } catch (error) {
    console.error('Get reviews error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching reviews'
    });
  }
};

export const createReview = async (req: Request, res: Response) => {
  try {
    const review = new CustomerReview({
      ...req.body,
      productId: req.params.productId
    });
    
    await review.save();

    res.status(201).json({
      success: true,
      data: review,
      message: 'Review created successfully'
    });
  } catch (error) {
    console.error('Create review error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while creating review'
    });
  }
};