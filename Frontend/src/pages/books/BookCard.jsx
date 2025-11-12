import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";

const BookCard = ({ book }) => {
  // Debug logs - check browser console
  console.log("Full book object:", book);
  console.log("Book _id:", book?._id);
  console.log("Book id:", book?.id);
  
  // Use whichever ID exists
  const bookId = book?._id || book?.id;
  
  const dispatch = useDispatch();
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }

  return (
    <div
      className="group relative rounded-2xl bg-white p-4 sm:p-5 border border-gray-100 
        transition-all duration-500 ease-out
        hover:-translate-y-2 hover:scale-[1.01]
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
        hover:border-transparent
        overflow-hidden"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-2xl"></div>
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 relative z-10">
        {/* Image container */}
        <div className="w-full sm:w-1/3 flex-shrink-0 relative overflow-hidden rounded-xl shadow-inner bg-gray-50 flex items-center justify-center">
          <Link to={`/books/${book?._id}`}>
            <img
              src={getImgUrl(book?.coverImage)}
              alt={book?.title}
              className="max-h-60 sm:max-h-72 w-auto mx-auto rounded-xl object-contain transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Link>
        </div>

        {/* Content */}
        <div className="flex-1 text-center sm:text-left">
          <Link to={`/books/${book?._id}`}>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 group-hover:text-primary transition-colors duration-300 line-clamp-2">
              {book?.title}
            </h3>
          </Link>
          
          <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
            {book?.description?.length > 80
              ? `${book?.description.slice(0, 80)}...`
              : book?.description}
          </p>
          
          <p className="font-bold text-base sm:text-lg mb-4 text-gray-800">
            ${book?.newPrice}
            <span className="line-through font-normal ml-2 text-gray-400 text-sm sm:text-base">
              ${book?.oldPrice}
            </span>
          </p>
          
          <button
            onClick={() => handleAddToCart(book)}
            className="btn-primary w-full sm:w-auto justify-center px-5 py-2 flex items-center gap-2 
              group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-all duration-300 rounded-lg"
          >
            <FiShoppingCart className="text-lg" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;