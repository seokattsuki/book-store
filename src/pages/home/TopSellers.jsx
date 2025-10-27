import React, { useState, useEffect, useRef } from "react";
import BookCard from "../books/BookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion"; // ✅ For animation

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";

// Animated category list
const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"];

const Recommend = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  // Filter books based on selected category
  const filteredBooks =
    selectedCategory === "Choose a genre"
      ? books
      : books.filter(
          (book) =>
            book.category &&
            book.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="py-12">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">Top Sellers</h2>

      {/* 🪄 Animated Category Buttons */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
        <div className="flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-5 py-2.5 rounded-full font-medium transition-all duration-500 
                ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-[0_8px_25px_rgba(0,0,0,0.1)]"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {category}

              {/* Active indicator glow */}
              {selectedCategory === category && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-md"
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-primary hover:bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-primary hover:bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
        spaceBetween={30}
        navigation={false}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 2, spaceBetween: 50 },
          1180: { slidesPerView: 3, spaceBetween: 50 },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {filteredBooks.length > 0 &&
          filteredBooks.map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Recommend;
