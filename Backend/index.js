import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoutes from './src/books/book.route.js';
import cors from 'cors';

dotenv.config();
const app = express();


app.use(express.json());

// CORS setup
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true,
}));

// Routes
app.use("/api/books", bookRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

// Start Server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`⚡ Server running on port ${PORT}`));
});
