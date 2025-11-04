import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getImgUrl } from "../../utils/getImgUrl";
import { clearCart, removeFromCart } from "../../redux/features/cart/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.newPrice, 0)
    .toFixed(2);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => { 
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 py-6 px-3 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100 backdrop-blur-md"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 px-5 sm:px-8 py-5 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            Your Shopping Cart
          </h2>
          {cartItems.length > 0 && (
            <button
              onClick={handleClearCart}
              className="w-full sm:w-auto px-4 py-2 text-sm bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-md hover:shadow-md hover:scale-105 transition-all duration-300"
            >
              Clear Cart
            </button>
          )}
        </div>

        {/* Cart Layout */}
        <div className="flex flex-col lg:flex-row">
          {/* Items Section */}
          <div className="flex-1 px-4 sm:px-8 py-6">
            <AnimatePresence>
              {cartItems.length > 0 ? (
                cartItems.map((product, index) => (
                  <motion.div
                    key={product._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.05 }}
                    className="group flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 sm:py-6 border-b border-gray-100 hover:bg-gray-50/80 rounded-xl transition-all duration-300"
                  >
                    <div className="flex items-center w-full space-x-4 sm:space-x-6">
                      <div className="h-20 w-20 sm:h-24 sm:w-24 flex-shrink-0 overflow-hidden rounded-xl shadow-sm">
                        <motion.img
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.4 }}
                          src={getImgUrl(product.coverImage)}
                          alt={product.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition">
                          {product.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Category: {product.category}
                        </p>
                        <p className="text-sm text-gray-500">Qty: 1</p>
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-0 text-left sm:text-right">
                      <p className="text-base sm:text-lg font-semibold text-gray-900">
                        ${product.newPrice}
                      </p>
                      <button
                        onClick={() => handleRemoveFromCart(product)}
                        className="mt-1 text-sm text-red-500 hover:text-red-600 transition"
                      >
                        Remove
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-base sm:text-lg">
                    Your cart is empty ✨
                  </p>
                  <Link
                    to="/"
                    className="mt-2 inline-block text-blue-600 hover:text-blue-500 transition"
                  >
                    Continue Shopping →
                  </Link>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          {cartItems.length > 0 && (
            <div className="lg:w-1/3 bg-gray-50 border-t lg:border-t-0 lg:border-l border-gray-100 px-6 sm:px-8 py-8 sticky top-0">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                Order Summary
              </h3>

              <div className="flex justify-between text-gray-700 mb-2">
                <p>Subtotal</p>
                <p className="font-medium">${totalPrice}</p>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Shipping calculated at checkout
              </p>
              <div className="border-t border-gray-200 my-4"></div>

              <div className="flex justify-between text-base font-semibold text-gray-900">
                <p>Total</p>
                <p>${totalPrice}</p>
              </div>

              <Link
                to="/checkout"
                className="mt-6 block w-full text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-xl shadow-md hover:scale-[1.02] hover:shadow-lg transition-all"
              >
                Proceed to Checkout
              </Link>

              <Link
                to="/"
                className="mt-3 block text-center text-blue-600 hover:text-blue-500 font-medium"
              >
                ← Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CartPage;
