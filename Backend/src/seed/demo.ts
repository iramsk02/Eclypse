// src/seed/demoData.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../models/Product';
import CustomerReview from '../models/CustomerReview';
import FAQ from '../models/FAQ';
import Order from '../models/Order';
import connectDB from '../config/database';
import Cart from '../models/Cart';

dotenv.config();

const seedProducts = [
  {
    name: 'Classic T-Shirt',
    price: 29.99,
    description: 'A classic cotton t-shirt for everyday wear.',
    images: ['tshirt1.jpg'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Tops',
    inStock: true
  },
  {
    name: 'Denim Jacket',
    price: 79.99,
    description: 'Stylish denim jacket for all seasons.',
    images: ['jacket1.jpg'],
    sizes: ['M', 'L'],
    category: 'Outerwear',
    inStock: true
  }
];

const seedFAQs = [
  {
    question: 'What is your return policy?',
    answer: 'We accept returns within 30 days of purchase.',
    category: 'Returns',
    order: 1
  },
  {
    question: 'How long does shipping take?',
    answer: 'Shipping usually takes 3-5 business days.',
    category: 'Shipping',
    order: 2
  }
];

const seedReviews = [
  {
    productId: '', // Will be assigned dynamically
    name: 'John Doe',
    location: 'New York, USA',
    review: 'Great quality product!',
    avatar: 'avatar1.jpg',
    rating: 5
  }
];



// const runSeeder = async () => {
//   try {
//     await connectDB();

//     // Clear existing data
//     await Product.deleteMany();
//     await FAQ.deleteMany();
//     await CustomerReview.deleteMany();
//     await Order.deleteMany();

//     // Seed Products
//     const createdProducts = await Product.insertMany(seedProducts);



//     // Assign productId to reviews
//     seedReviews[0].productId = createdProducts[0].id;

//     // Seed Reviews & FAQs
//     await CustomerReview.insertMany(seedReviews);
//     await FAQ.insertMany(seedFAQs);

//     console.log('✅ Demo data inserted successfully!');
//     process.exit();
//   } catch (error) {
//     console.error('❌ Error inserting demo data:', error);
//     process.exit(1);
//   }
// };

// runSeeder();


const runSeeder = async () => {
  try {
    await connectDB();

    // Clear all data
    await Product.deleteMany();
    await FAQ.deleteMany();
    await CustomerReview.deleteMany();
    await Order.deleteMany();
    await Cart.deleteMany(); // 👈

    // Seed Products
    const createdProducts = await Product.insertMany(seedProducts);

    // Assign productId to reviews
    //@ts-ignore
    seedReviews[0].productId = createdProducts[0]._id;

    // Seed FAQs, Reviews, and Carts
    await CustomerReview.insertMany(seedReviews);
    await FAQ.insertMany(seedFAQs);

    // Seed Cart items
    const seedCarts = [
      {
        userId: 'user123',
        productId: createdProducts[0]._id,
        quantity: 2
      },
      {
        userId: 'user123',
        productId: createdProducts[1]._id,
        quantity: 1
      }
    ];
    await Cart.insertMany(seedCarts);

    console.log('✅ Demo data inserted successfully!');
    process.exit();
  } catch (error) {
    console.error('❌ Error inserting demo data:', error);
    process.exit(1);
  }
};

runSeeder();
