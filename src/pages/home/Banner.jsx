import React from 'react'
import bannerImg from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-8 md:py-16 justify-between items-center gap-8 md:gap-12'>

      {/* Image Section with Hover */}
      <div className='w-full md:w-1/2 flex items-center justify-center md:justify-end group relative'>
        {/* Soft gradient glow on hover */}
        <div className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out bg-gradient-to-br from-primary/20 via-transparent to-primary/5 blur-2xl'></div>

        <img 
          src={bannerImg} 
          alt="Banner" 
          className='w-full max-w-md md:max-w-lg md:translate-x-6 relative z-10 transform transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 group-hover:drop-shadow-[0_10px_25px_rgba(0,0,0,0.2)]'  
        />
      </div>

      {/* Text Section */}
      <div className='w-full md:w-1/2'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-7'>
          New Releases This Week
        </h1>
        <p className='text-sm sm:text-base mb-6 md:mb-10 leading-relaxed'>
          It's time to update your reading list with some of the latest and greatest releases in the literary world.
          From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone.
        </p>

        <button className='btn-primary w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]'>
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Banner
