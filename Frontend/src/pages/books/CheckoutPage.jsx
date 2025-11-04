import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.newPrice, 0)
    .toFixed(2);

  const currentUser = { email: "john.doe@gmail.com" }; // example user data

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isChecked, setIsChecked] = useState(false);

  const onSubmit = (data) => {
    const newOrder = {
      name: data.name,
      email: data.email,
      address: {
        city: data.city,
        country: data.country,
        state: data.state,
        zipcode: data.zipcode,
      },
      phone: data.phone,
      productIds: cartItems.map((item) => item?._id),
      totalPrice: totalPrice,
    };
    console.log(newOrder);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        {/* Header Section */}
        <div className="border-b border-gray-200 px-8 py-6 flex flex-wrap justify-between items-center bg-gray-50">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Checkout</h1>
            <p className="text-sm text-gray-500 mt-1">
              Complete your purchase by filling out the details below
            </p>
          </div>
          <div className="text-right mt-4 sm:mt-0">
            <p className="text-gray-600 text-sm">Total Items</p>
            <p className="text-lg font-bold text-blue-600">
              {cartItems.length} item{cartItems.length !== 1 && "s"}
            </p>
            <p className="text-gray-600 text-sm mt-1">Total Price</p>
            <p className="text-lg font-bold text-green-600">${totalPrice}</p>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none transition"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">Name is required</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-1">Email Address</label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                type="email"
                defaultValue={""}
                placeholder="email@domain.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none transition"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  Enter a valid email address
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 mb-1">Phone Number</label>
              <input
                {...register("phone", { required: true })}
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none transition"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">Phone is required</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-700 mb-1">Address</label>
              <input
                {...register("address", { required: true })}
                type="text"
                placeholder="123 Main Street"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none transition"
              />
              {errors.address && (
                <p className="text-red-500 text-xs mt-1">Address is required</p>
              )}
            </div>

            {/* City */}
            <div>
              <label className="block text-gray-700 mb-1">City</label>
              <input
                {...register("city", { required: true })}
                type="text"
                placeholder="New York"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none transition"
              />
              {errors.city && (
                <p className="text-red-500 text-xs mt-1">City is required</p>
              )}
            </div>

            {/* State */}
            <div>
              <label className="block text-gray-700 mb-1">State</label>
              <input
                {...register("state", { required: true })}
                type="text"
                placeholder="California"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none transition"
              />
              {errors.state && (
                <p className="text-red-500 text-xs mt-1">State is required</p>
              )}
            </div>

            {/* Country */}
            <div>
              <label className="block text-gray-700 mb-1">Country</label>
              <input
                {...register("country", { required: true })}
                type="text"
                placeholder="United States"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none transition"
              />
              {errors.country && (
                <p className="text-red-500 text-xs mt-1">Country is required</p>
              )}
            </div>

            {/* Zipcode */}
            <div>
              <label className="block text-gray-700 mb-1">Zip Code</label>
              <input
                {...register("zipcode", { required: true })}
                type="text"
                placeholder="10001"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none transition"
              />
              {errors.zipcode && (
                <p className="text-red-500 text-xs mt-1">Zip code is required</p>
              )}
            </div>
          </motion.div>

          {/* Terms Checkbox */}
          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              id="agree"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="accent-blue-600 h-4 w-4"
            />
            <label htmlFor="agree" className="text-gray-600 text-sm">
              I agree to the{" "}
              <Link className="text-blue-600 underline">Terms & Conditions</Link>{" "}
              and{" "}
              <Link className="text-blue-600 underline">Shopping Policy</Link>.
            </label>
          </div>

          {/* Submit Button */}
          <motion.div
            whileHover={{ scale: isChecked ? 1.03 : 1 }}
            whileTap={{ scale: isChecked ? 0.98 : 1 }}
            className="pt-4 flex justify-end"
          >
            <button
              type="submit"
              disabled={!isChecked}
              className={`px-6 py-3 rounded-lg font-semibold text-white transition-all ${
                isChecked
                  ? "bg-blue-600 hover:bg-blue-700 shadow-md"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Place Order
            </button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
};

export default CheckoutPage;
