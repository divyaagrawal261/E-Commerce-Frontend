import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-20">
        
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Our Products</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/products/trousers" className="hover:text-white transition">Trousers</Link>
            </li>
            <li>
              <Link to="/products/shirts" className="hover:text-white transition">Shirts</Link>
            </li>
            <li>
              <Link to="/products/t-shirts" className="hover:text-white transition">T-Shirts</Link>
            </li>
            <li>
              <Link to="/products/ties" className="hover:text-white transition">Ties</Link>
            </li>
            <li>
              <Link to="/products/denims" className="hover:text-white transition">Denims</Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="mb-4">Subscribe to our newsletter to receive the latest updates and offers!</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-gray-800 w-full max-w-full text-white border border-gray-700 focus:outline-none focus:border-white"
            />
            <button className="bg-blue-600 px-4 py-2 text-white rounded-md hover:bg-blue-700 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
        <p>&copy; 2024 Black Purl. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
