
// src/types/index.ts
export interface IProduct {
  name: string;
  price: number;
  description: string;
  images: string[];
  sizes: string[];
  category: string;
  inStock: boolean;
  rating: number;
  reviews: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  image: string;
}

export interface ICustomerReview {
  // id: string;
  productId: string;
  name: string;
  location: string;
  review: string;
  avatar: string;
  rating: number;
  createdAt: Date;
}

export interface IFAQ {
  question: string;
  answer: string;
  category: string;
  order: number;
}

export interface IOrder {
  userId?: string;
  items: ICartItem[];
  billingAddress: {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  paymentMethod: string;
  subtotal: number;
  tax: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

export interface IUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
}