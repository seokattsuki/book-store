import React from 'react'
import { Link } from 'react-router-dom'
import { HiBars3CenterLeft, HiOutlineShoppingCart } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { useState } from 'react';
import avatarImg from '../assets/avatar.png'
import { useSelector } from 'react-redux';

const navigation = [
  { name: 'Dashboard', href: '/dashboard'},
  { name: 'Orders', href: '/orders'},
  { name: 'Cart Page', href: '/cart'},
  { name: 'Checkout', href: '/checkout'},
]

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentUser = false;
  const cartItems = useSelector(state => state.cart.cartItems);
  
  return (
    <header className='max-w-screen-2xl mx-auto px-8 md:px-16 py-6'>
        <nav className='flex justify-between items-center'>
            {/*left side */}
            <div className='flex items-center md:gap-16 gap-4'>
              <Link to="/">
                <HiBars3CenterLeft className='size-6'/>
              </Link>

              {/* search input */}
              <div className='relative sm:w-72 w-40 space-x-2'>
                <IoIosSearch className='absolute inline-block left-3 inset-y-2'/>
                <input type="text" placeholder="Search here" 
                className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none'
                />
              </div>
            </div>

            {/*right side */}
            <div className='flex items-center gap-4'>
              <div className='relative'>
                {
                  currentUser ? (
                    <>
                      <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <img 
                          src={avatarImg} 
                          alt='User avatar' 
                          className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {
                        isDropdownOpen && (
                          <div className='absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
                            <ul className='py-2'>
                              {
                                navigation.map((item) => (
                                  <li key={item.name} onClick={()=>
                                    setIsDropdownOpen(false)
                                  }>
                                    <Link 
                                      to={item.href} 
                                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                                      onClick={() => setIsDropdownOpen(false)}
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        )
                      }
                    </>
                  ) : (
                    <Link to='/login'>
                      <FaRegUser className='size-6'/>
                    </Link>
                  )
                }
              </div>
              
              <button className='hidden sm:block'>
                <FaRegHeart className='size-6'/>
              </button>

              <Link to='/cart' className='bg-primary p-1 sm:px-6 px-2 py-2 flex items-center rounded-sm'>
                <HiOutlineShoppingCart className='size-5' />
                {
                  cartItems.length > 0 ? <span className='text-sm font-semibold sm:ml-1'>{cartItems.length}</span> : null
                }
                
              </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar