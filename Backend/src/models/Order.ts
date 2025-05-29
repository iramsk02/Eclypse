import mongoose, { Document, Schema } from 'mongoose';
import { IOrder } from '../types';

interface IOrderDocument extends IOrder, Document {}

const OrderSchema = new Schema<IOrderDocument>({
  userId: { type: String },
  items: [{
    id: String,
    productId: String,
    name: String,
    price: Number,
    quantity: Number,
    size: String,
    image: String
  }],
  billingAddress: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true }
  },
  paymentMethod: { type: String, required: true },
  subtotal: { type: Number, required: true },
  tax: { type: Number, required: true },
  total: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  }
}, {
  timestamps: true,
  toJSON: { transform: (doc, ret) => { ret.id = ret._id; delete ret._id; delete ret.__v; return ret; } }
});

export default mongoose.model<IOrderDocument>('Order', OrderSchema);