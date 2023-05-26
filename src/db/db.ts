
import mongoose from 'mongoose';
import config from '../../config/config';

export const connectDB = async () => {
  try {
    await mongoose.connect(config.db.uri);
    console.log('MongoDB connected');
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);
    }
    process.exit(1);
  }
};