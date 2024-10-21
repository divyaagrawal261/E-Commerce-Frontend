import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  function handleLogout() {
    localStorage.removeItem('accessToken');
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
  }

  return (
    <nav className="sticky top-0 z-10 w-full px-4 py-2 text-black bg-white shadow-md md:px-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-lg font-semibold">
          Black Purl
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6">
          <Link to="/products" className="hover:text-gray-700">
            SALE
          </Link>
          <Link to="/products" className="hover:text-gray-700">
            NEW ARRIVALS
          </Link>
          <Link to="/products" className="hover:text-gray-700">
            PRODUCTS
          </Link>
          <Link to="/checkout" className="hover:text-gray-700">
            CART
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="px-4 py-2 text-sm font-bold uppercase hover:bg-gray-900/10">
              Log Out
            </button>
          ) : (
            <>
              <Link to="/login" className="px-4 py-2 text-sm font-bold uppercase hover:bg-gray-900/10">
                Log In
              </Link>
              <Link to="/register" className="px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg hover:bg-gray-800">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Sidebar for mobile */}
      <div className={`fixed inset-0 z-40 bg-gray-800 bg-opacity-50 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`} onClick={toggleSidebar}></div>
      <div className={`fixed right-0 top-0 z-50 h-full w-3/4 max-w-sm bg-white shadow-lg transition-transform transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
        <button className="absolute top-4 right-4" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <ul className="flex flex-col items-center gap-6 mt-10">
          <Link to="/products" onClick={toggleSidebar} className="text-lg">
            SALE
          </Link>
          <Link to="/products" onClick={toggleSidebar} className="text-lg">
            NEW ARRIVALS
          </Link>
          <Link to="/products" onClick={toggleSidebar} className="text-lg">
            PRODUCTS
          </Link>
          <Link to="/checkout" onClick={toggleSidebar} className="text-lg">
            CART
          </Link>

          {isLoggedIn ? (
            <button onClick={() => { handleLogout(); toggleSidebar(); }} className="px-4 py-2 text-sm font-bold uppercase text-gray-900 hover:bg-gray-900/10">
              Log Out
            </button>
          ) : (
            <>
              <Link to="/login" onClick={toggleSidebar} className="px-4 py-2 text-sm font-bold uppercase text-gray-900 hover:bg-gray-900/10">
                Log In
              </Link>
              <Link to="/register" onClick={toggleSidebar} className="px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg hover:bg-gray-800">
                Sign Up
              </Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
