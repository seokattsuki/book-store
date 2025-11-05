import express from 'express';
import Book from './book.model.js';

const router = express.Router();

router.post("/create-book", async (req, res) => {
try {
    const newBook = await Book({...req.body});
    await newBook.save();
    res.status(201)
    .json({message: "Book posted successfully", book: newBook});
} catch (error) {
    res.status(500)
    .json({message: "Failed to post book", error: error.message});
    
}

})

export default router;