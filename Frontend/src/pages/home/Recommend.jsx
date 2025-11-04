import React, { useState, useEffect, useRef } from "react";
import BookCard from "../books/BookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";

const Recommend = () => {
  const [books, setBooks] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="py-12">
      {/* Header with Navigation */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Recommended for You</h2>
        
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
        {books.length > 0 &&
          books.map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Recommend;