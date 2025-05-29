import mongoose, { Document, Schema } from 'mongoose';
// import { Document } from 'mongoose';
// import mongoose {Document} from 'mongoose';
import { IProduct } from '../types';

interface IProductDocument extends IProduct, Document { }

const ProductSchema = new Schema<IProductDocument>({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  description: { type: String, required: true },
  images: [{ type: String, required: true }],
  sizes: [{ type: String, required: true }],
  category: { type: String, required: true },
  inStock: { type: Boolean, default: true },
  rating: { type: Number, default: 0, min: 0, max: 5 },
  reviews: { type: Number, default: 0, min: 0 }
});

export default mongoose.model<IProductDocument>('Product', ProductSchema);