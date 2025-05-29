import mongoose from 'mongoose';
import dotenv from "dotenv"
dotenv.config()
import { MONGO_URI } from './config';
const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(MONGO_URI );
    console.log(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

export default connectDB;