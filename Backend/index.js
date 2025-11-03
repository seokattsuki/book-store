import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();


const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully");
        
    } catch (error) {
        console.log("MongoDB Connection Failed: ", error.message);
        process.exit(1);
    }
}


app.get('/', (req, res) => {
    res.send('Server is running');
});

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`⚡ Server running on port ${PORT}`));
});