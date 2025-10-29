import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaGoogle, FaBook, FaBookOpen, FaBookReader, FaUser, FaFeatherAlt } from "react-icons/fa";
import { useForm } from "react-hook-form"

const Register = () => {
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      setTimeout(() => {
        alert("Registration successful!");
        setIsLoading(false)
      }, 1500)
    } catch (error) {
      setMessage("Registration failed. Please try again.") 
      console.error(error)
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    try {
      setTimeout(() => {
        alert("Registration successful!");
        setIsLoading(false)
      }, 1500)
    } catch (error) {
      alert("Google sign in failed!") 
      console.error(error)
      setIsLoading(false)
    }
  }

  return (
    <div className='min-h-screen flex flex-col lg:flex-row'>
      {/* Left Side - Full Screen Yellow Gradient */}
      <div className='flex-1 min-h-[50vh] lg:min-h-screen bg-gradient-to-br from-amber-300/20 via-yellow-300/15 to-orange-400/10 flex items-center justify-center p-6 lg:p-12 relative overflow-hidden'>
        {/* Animated Background Elements - Hidden on mobile */}
        <div className="absolute inset-0 overflow-hidden hidden lg:block">
          <div className="absolute top-1/4 left-1/4 animate-book-float">
            <FaBookReader className="text-amber-300/30 text-4xl lg:text-6xl" />
          </div>
          <div className="absolute top-1/3 right-1/4 animate-book-float animation-delay-2000">
            <FaBook className="text-yellow-300/25 text-5xl lg:text-7xl" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-book-float animation-delay-3000">
            <FaBookOpen className="text-orange-400/30 text-3xl lg:text-5xl" />
          </div>
          <div className="absolute top-1/2 right-1/3 animate-book-float animation-delay-1500">
            <FaUser className="text-amber-400/25 text-4xl lg:text-6xl" />
          </div>
        </div>

        {/* Floating Particles - Hidden on mobile */}
        <div className="absolute inset-0 hidden lg:block">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-amber-400/20 rounded-full animate-particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Content - Directly on background */}
        <div className='text-center relative z-10 max-w-lg w-full px-4'>
          <div className="inline-flex items-center justify-center w-16 h-16 lg:w-28 lg:h-28 bg-white/10 rounded-full mb-4 lg:mb-8 backdrop-blur-sm border border-amber-300/20 animate-gentle-pulse">
            <FaUser className="text-amber-600 text-2xl lg:text-5xl" />
          </div>
          <h1 className='text-3xl lg:text-6xl font-bold text-amber-900 font-secondary mb-4 lg:mb-6 animate-slide-up'>
            Join Us
          </h1>
          <p className='text-lg lg:text-2xl text-amber-700/90 mb-4 lg:mb-8 animate-slide-up animation-delay-200'>
            Start your reading adventure today
          </p>
          <div className='animate-slide-up animation-delay-400'>
            <div className='w-20 lg:w-32 h-1 bg-blue-400/80 mx-auto mb-4 lg:mb-6 rounded-full'></div>
            <p className='text-amber-600/90 text-base lg:text-xl'>
              Discover your next favorite book
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Full Screen Blue Gradient */}
      <div className='flex-1 min-h-[50vh] lg:min-h-screen bg-gradient-to-br from-blue-400/20 via-blue-300/15 to-indigo-400/10 flex items-center justify-center p-6 lg:p-12 relative overflow-hidden'>
        {/* Animated Background Elements - Hidden on mobile */}
        <div className="absolute inset-0 overflow-hidden hidden lg:block">
          <div className="absolute top-1/4 right-1/4 animate-book-float animation-delay-1000">
            <FaFeatherAlt className="text-blue-300/30 text-3xl lg:text-5xl" />
          </div>
          <div className="absolute bottom-1/3 left-1/4 animate-book-float animation-delay-2500">
            <FaBookOpen className="text-indigo-300/25 text-4xl lg:text-6xl" />
          </div>
          <div className="absolute top-1/3 left-1/3 animate-book-float animation-delay-3500">
            <FaBook className="text-blue-400/30 text-5xl lg:text-7xl" />
          </div>
        </div>

        {/* Floating Particles - Hidden on mobile */}
        <div className="absolute inset-0 hidden lg:block">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Form - Directly on background with fade border */}
        <div className='w-full max-w-md lg:max-w-lg relative z-10 animate-form-appear px-4'>
          <div className='text-center mb-8 lg:mb-12'>
            <h2 className='text-2xl lg:text-5xl font-bold text-blue-900 font-secondary mb-3 lg:mb-4'>
              Create Account
            </h2>
            <p className='text-lg lg:text-2xl text-blue-700/90'>
              Begin your reading journey
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6 lg:space-y-8'>
            <div className='space-y-4 lg:space-y-6'>
              <div className='group'>
                <input 
                  className='w-full bg-white/20 backdrop-blur-md border-2 border-blue-300/30 rounded-xl lg:rounded-2xl py-3 lg:py-5 px-4 lg:px-7 text-blue-900 placeholder-blue-700/70 focus:outline-none focus:border-blue-400 focus:bg-white/30 transition-all duration-300 text-base lg:text-lg hover:border-blue-400/50'
                  {...register("name", { 
                    required: "Full name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters"
                    }
                  })} 
                  placeholder='Full Name'
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-2 lg:mt-3 animate-shake">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className='group'>
                <input 
                  className='w-full bg-white/20 backdrop-blur-md border-2 border-blue-300/30 rounded-xl lg:rounded-2xl py-3 lg:py-5 px-4 lg:px-7 text-blue-900 placeholder-blue-700/70 focus:outline-none focus:border-blue-400 focus:bg-white/30 transition-all duration-300 text-base lg:text-lg hover:border-blue-400/50'
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address"
                    }
                  })} 
                  placeholder='Email Address'
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-2 lg:mt-3 animate-shake">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className='group'>
                <input 
                  className='w-full bg-white/20 backdrop-blur-md border-2 border-blue-300/30 rounded-xl lg:rounded-2xl py-3 lg:py-5 px-4 lg:px-7 text-blue-900 placeholder-blue-700/70 focus:outline-none focus:border-blue-400 focus:bg-white/30 transition-all duration-300 text-base lg:text-lg hover:border-blue-400/50'
                  {...register("password", { 
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters"
                    }
                  })} 
                  type="password" 
                  placeholder='Password'
                />
                {errors.password && (
                  <p className="text-red-400 text-sm mt-2 lg:mt-3 animate-shake">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className='group'>
                <input 
                  className='w-full bg-white/20 backdrop-blur-md border-2 border-blue-300/30 rounded-xl lg:rounded-2xl py-3 lg:py-5 px-4 lg:px-7 text-blue-900 placeholder-blue-700/70 focus:outline-none focus:border-blue-400 focus:bg-white/30 transition-all duration-300 text-base lg:text-lg hover:border-blue-400/50'
                  {...register("confirmPassword", { 
                    required: "Please confirm your password",
                    validate: value => value === watch('password') || "Passwords do not match"
                  })} 
                  type="password" 
                  placeholder='Confirm Password'
                />
                {errors.confirmPassword && (
                  <p className="text-red-400 text-sm mt-2 lg:mt-3 animate-shake">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            {message && (
              <div className="bg-red-400/20 backdrop-blur-md border border-red-400/30 rounded-xl lg:rounded-2xl p-4 lg:p-5 animate-bounce-in">
                <p className='text-red-700 text-sm lg:text-lg text-center'>{message}</p>
              </div>
            )}

            <button 
              type="submit"
              disabled={isLoading}
              className={`w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 lg:py-5 px-6 lg:px-8 rounded-xl lg:rounded-2xl transition-all duration-300 shadow-lg lg:shadow-2xl hover:shadow-xl lg:hover:shadow-3xl hover:scale-105 flex items-center justify-center text-base lg:text-xl ${
                isLoading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 lg:h-6 lg:w-6 border-b-2 border-white mr-3 lg:mr-4"></div>
                  Creating Account...
                </>
              ) : (
                'Start Reading Journey'
              )}
            </button>
          </form>

          <div className='mt-6 lg:mt-10 space-y-4 lg:space-y-6'>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-blue-400/30'></div>
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='bg-transparent px-4 lg:px-6 text-blue-700/90 text-sm lg:text-lg'>Or continue with</span>
              </div>
            </div>

            <button 
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className='w-full flex items-center justify-center gap-3 lg:gap-4 bg-white/20 backdrop-blur-md border-2 border-blue-300/30 hover:border-blue-400 text-blue-900 font-semibold py-3 lg:py-5 px-4 lg:px-8 rounded-xl lg:rounded-2xl transition-all duration-300 hover:shadow-lg lg:hover:shadow-2xl hover:scale-105 text-sm lg:text-lg'
            >
              <FaGoogle className="text-red-500 text-base lg:text-xl" />
              Sign up with Google
            </button>
          </div>

          <p className='text-center mt-6 lg:mt-10 text-blue-700/90 text-sm lg:text-lg'>
            Already have an account?{' '}
            <Link 
              to='/login' 
              className='text-amber-600 hover:text-amber-800 font-bold transition-colors duration-300 underline text-sm lg:text-xl'
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register