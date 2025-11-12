import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";
import { getImgUrl } from '../../utils/getImgUrl';
import { useFetchBookByIdQuery } from '../../redux/features/books/bookApi';

const SingleBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Check if ID exists and is valid
  if (!id || id === 'undefined') {
    return (
      <div className="max-w-lg shadow-md p-5">
        <h2 className="text-xl font-bold text-red-600 mb-4">Invalid Book ID</h2>
        <p className="text-gray-700 mb-4">
          The book ID is missing or invalid. Please select a book from the list.
        </p>
        <button 
          onClick={() => navigate('/books')} 
          className="btn-primary px-6"
        >
          Back to Books
        </button>
      </div>
    );
  }

  const { data, isLoading, isError, error } = useFetchBookByIdQuery(id);

  if (isLoading) {
    return (
      <div className="max-w-lg shadow-md p-5">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
          <div className="h-64 bg-gray-200 rounded mb-8"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    console.error("Fetch Error:", error);
    return (
      <div className="max-w-lg shadow-md p-5">
        <h2 className="text-xl font-bold text-red-600 mb-4">
          Error Loading Book
        </h2>
        <p className="text-gray-700 mb-2">
          {error?.data?.message || error?.error || "An unknown error occurred."}
        </p>
        <button 
          onClick={() => navigate('/books')} 
          className="btn-primary px-6 mt-4"
        >
          Back to Books
        </button>
      </div>
    );
  }

  // Since we added transformResponse, data is now directly the book object
  const book = data;

  if (!book) {
    return (
      <div className="max-w-lg shadow-md p-5">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Book Not Found</h2>
        <p className="text-gray-600 mb-4">
          The requested book could not be found.
        </p>
        <button 
          onClick={() => navigate('/books')} 
          className="btn-primary px-6"
        >
          Back to Books
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-lg shadow-md p-5">
      <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

      <div>
        <img
          src={getImgUrl(book.coverImage)}
          alt={book.title}
          className="mb-8 w-full"
        />
      </div>

      <div className="mb-5">
        <p className="text-gray-700 mb-2">
          <strong>Author:</strong> {book.author || 'admin'}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Published:</strong> {new Date(book?.createdAt).toLocaleDateString()}
        </p>
        <p className="text-gray-700 mb-4 capitalize">
          <strong>Category:</strong> {book?.category}
        </p>
        <p className="text-gray-700">
          <strong>Description:</strong> {book.description}
        </p>
      </div>

      <button className="btn-primary px-6 space-x-1 flex items-center gap-1">
        <FiShoppingCart />
        <span>Add to Cart</span>
      </button>
    </div>
  );
};

export default SingleBook;