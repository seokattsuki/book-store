import Book from './book.model.js';

// POST: Create a book
const postABook = async (req, res) => {
  try {
    const newBook = new Book({ ...req.body });
    await newBook.save();
    res.status(201).json({ message: "Book posted successfully", book: newBook });
  } catch (error) {
    res.status(500).json({ message: "Failed to post book", error: error.message });
  }
};

// GET: All books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    
    // 👇 ADD THESE DEBUG LOGS
    console.log("Total books found:", books.length);
    console.log("First book _id:", books[0]?._id);
    console.log("First book as JSON:", JSON.stringify(books[0]));
    
    res.status(200).json({ message: "Books fetched successfully", books });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch books", error: error.message });
  }
};

//  GET: Single book
import mongoose from "mongoose";

const getSinglebook = async (req, res) => {
  try {
    const { id } = req.params;

    // ✅ Check if the ID is a valid ObjectId before querying
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid book ID format" });
    }

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book fetched successfully", book });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch book", error: error.message });
  }
};


// PUT: Update a book
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book updated successfully", book: updatedBook });
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ message: "Failed to update book" });
  }
};

// DELETE: Delete a book
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted successfully", book: deletedBook });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete book", error: error.message });
  }
};

export { postABook, getAllBooks, getSinglebook, updateBook, deleteBook };
