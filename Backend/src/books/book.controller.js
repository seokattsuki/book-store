import Book from './book.model.js';


 const postABook = async (req, res) => {
try {
    const newBook = await Book({...req.body});
    await newBook.save();
    res.status(201)
    .json({message: "Book posted successfully", book: newBook});
} catch (error) {
    res.status(500)
    .json({message: "Failed to post book", error: error.message});
    
}
}

// get all books

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().sort({createdAt: -1});
        res.status(200)
        .json({message: "Books fetched successfully", books: books});
    } catch (error) {
        res.status(500)
        .json({message: "Failed to fetch books", error: error.message});
    }
}

// get a single book

const getSinglebook = async (req, res) => {
    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        if(!book){
            return res.status(404)
            .json({message: "Book not found"});
        }
        res.status(200)
        .json({message: "Book fetched successfully" , book: updatedBook});
    } catch (error) {
        res.status(500)
        .json({message: "Failed to fetch book", error: error.message});
    }
}

// update a book

const updateBook = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, {new: true})
        if(!updatedBook){
            res.status(404).json({message: "Book not found"});
        }
        res.status(200)
        .json({message: "Book updated successfully", book: updatedBook})
    } catch (error) {
        console.error("Error updating book:", error)
        res.status(500).json({ message: "Failed to update book"})
    }
}

// delete a book
const deleteBook = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if(!deletedBook){
            res.status(404)
            .json({message: "Book not found"})
        }
        res.status(200)
        .json({message: "Book deleted successully", book: deletedBook})
    } catch (error) {
        res.status(500)
        .json({message: "Failed to delete book", error: error.message});
    }
}

export {postABook, getAllBooks, getSinglebook, updateBook, deleteBook};