import express from 'express';
import cors from 'cors';
import compression from 'compression';
import connectDB from './config/database';
import dotenv from "dotenv";

// Route imports
import productRoutes from './routes/product';
import reviewRoutes from './routes/review';
import faqRoutes from './routes/faq';
import orderRoutes from './routes/order';
import cartRoutes from './routes/Cart';


// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Security middleware
app.use(cors());
app.use(compression());

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// API routes
app.use('/api/products', productRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

