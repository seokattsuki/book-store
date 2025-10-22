import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { getImgUrl } from '../../utils/getImgUrl'
import { Link } from 'react-router-dom'

const BookCard = ({ book }) => {
  return (
    <div
      className="group relative rounded-2xl bg-white p-5 border border-gray-100 
      transition-all duration-500 ease-out
      hover:-translate-y-3 hover:scale-[1.02]
      hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
      hover:border-transparent
      overflow-hidden"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-2xl"></div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4 relative z-10">
        {/* Image container with glass and depth */}
        <div className="sm:h-72 sm:flex-shrink-0 relative overflow-hidden rounded-xl shadow-inner">
          <Link to={`/books/${book?._id}`}>
            <img
              src={`${getImgUrl(book?.coverImage)}`}
              alt={book?.title}
              className="w-full h-full object-cover rounded-xl transform transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
            />
            {/* Glow on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Link>
        </div>

        <div className="flex-1">
          <Link to={`/books/${book._id}`}>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-primary transition-colors duration-300">
              {book.title}
            </h3>
          </Link>

          <p className="text-gray-600 mb-5 text-sm leading-relaxed">
            {book?.description.length > 80
              ? `${book?.description.slice(0, 80)}...`
              : book.description}
          </p>

          <p className="font-bold text-lg mb-5 text-gray-800">
            ${book?.newPrice}
            <span className="line-through font-normal ml-2 text-gray-400 text-base">
              ${book?.oldPrice}
            </span>
          </p>

          <button className="btn-primary px-6 py-2.5 flex items-center gap-2 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-all duration-300">
            <FiShoppingCart className="text-lg" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookCard
