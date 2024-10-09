"use client"

import { useState } from "react"
import { Menu, X, ShoppingCart } from "lucide-react"
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl font-bold text-gray-800">Black Purl</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to ="/products" className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">SALE</Link>
              <Link to = "/products" className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">NEW ARRIVALS</Link>
              <Link to = "/products" className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">PRODUCTS</Link>
              <Link to = "/checkout" className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                <ShoppingCart className="inline-block w-5 h-5 mr-1" />
                CART
              </Link>
            </div>
          </div>
          <div className="flex items-center">
          <Link to ="/login" passHref>

            <button className="bg-gray-100 text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium mr-2 transition duration-150 ease-in-out">LOG IN</button>
            </Link>
          <Link to ="/register" passHref>

            <button className="bg-gray-800 text-white hover:bg-gray-700 px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">SIGN UP</button>
            </Link>

            <div className="md:hidden ml-2">
              <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition duration-150 ease-in-out">
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to ="/products" className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out">SALE</Link>
            <Link to ="/products" className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out">NEW ARRIVALS</Link>
            <Link to ="/products" className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out">PRODUCTS</Link>
            <Link to ="/checkout" className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out">
              <ShoppingCart className="inline-block w-5 h-5 mr-1" />
              CART
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}