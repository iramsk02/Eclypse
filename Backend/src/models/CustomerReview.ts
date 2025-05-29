import mongoose, { Document, Schema } from 'mongoose';
import { ICustomerReview } from '../types';

interface ICustomerReviewDocument extends ICustomerReview, Document {}

const CustomerReviewSchema = new Schema<ICustomerReviewDocument>({
  productId: { type: String, required: true },
  name: { type: String, required: true, trim: true },
  location: { type: String, required: true, trim: true },
  review: { type: String, required: true },
  avatar: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 }
}, {
  timestamps: true,
  // toJSON: { transform: (doc, ret) => { ret.id = ret._id; delete ret._id; delete ret.__v; return ret; } }
});

export default mongoose.model<ICustomerReviewDocument>('CustomerReview', CustomerReviewSchema);
