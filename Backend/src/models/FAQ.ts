import mongoose, { Document, Schema } from 'mongoose';
import { IFAQ } from '../types';

interface IFAQDocument extends IFAQ, Document {}

const FAQSchema = new Schema<IFAQDocument>({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  category: { type: String, required: true },
  order: { type: Number, default: 0 }
}, {
  timestamps: true,
  toJSON: { transform: (doc, ret) => { ret.id = ret._id; delete ret._id; delete ret.__v; return ret; } }
});
export default mongoose.model<IFAQDocument>('FAQ', FAQSchema);
