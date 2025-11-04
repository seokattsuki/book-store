import React from 'react'
import footerLogo from "../assets/footer-logo.png"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-12 px-8 md:px-16">
      {/* Top Section */}
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-8">
        {/* Left Side - Logo and Nav */}
        <div className="md:w-1/2 w-full">
          <img src={footerLogo} alt="Logo" className="mb-6 w-32 brightness-110" />
          <ul className="flex flex-wrap gap-6 text-blue-200">
            <li><a href="#home" className="hover:text-primary transition-colors duration-200">Home</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors duration-200">Services</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors duration-200">About Us</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors duration-200">Contact</a></li>
          </ul>
        </div>

        {/* Right Side - Newsletter */}
        <div className="md:w-1/2 w-full">
          <h3 className="text-lg font-semibold mb-3 text-white">Stay Updated</h3>
          <p className="mb-4 text-sm text-blue-200">
            Subscribe to receive the latest updates and news.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2.5 border border-blue-800 rounded-lg text-white bg-slate-800/50 placeholder:text-blue-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-slate-800 transition-all duration-200"
            />
            <button className="bg-primary px-6 py-2.5 rounded-lg hover:bg-secondary text-white font-medium transition-colors duration-200 whitespace-nowrap shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-blue-800/50">
        {/* Left Side - Privacy Links */}
        <ul className="flex gap-6 mb-4 md:mb-0 text-sm text-blue-300">
          <li><a href="#privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
          <li><a href="#terms" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
        </ul>

        {/* Right Side - Social Icons */}
        <div className="flex gap-5">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-300 hover:text-primary transition-colors duration-200"
            aria-label="Facebook"
          >
            <FaFacebook size={20} />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-300 hover:text-primary transition-colors duration-200"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-300 hover:text-primary transition-colors duration-200"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer