// models/Cart.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ICart extends Document {
  userId: string;
  productId: string;
  quantity: number;
}

const CartSchema: Schema = new Schema({
  userId: { type: String, required: true },
  productId: { type: String, required: true },
  quantity: { type: Number, required: true, default: 1 },
});

export default mongoose.model<ICart>('Cart', CartSchema);

