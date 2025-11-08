import express from 'express';
import { postABook , getAllBooks, getSinglebook, updateBook, deleteBook} from './book.controller.js';


const router = express.Router();

router.post("/create-book", postABook);

//get all books
router.get("/", getAllBooks);

// single book endpoint
router.get("/:id", getSinglebook)

// update book
router.put("/edit/:id", updateBook);

//delete book
router.delete("/:id", deleteBook);

export default router;
