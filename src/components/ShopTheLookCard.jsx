import React from 'react';
import { Link } from 'react-router-dom';

function ShopTheLookCard({ src, redirect }) {
  return (
    <div
      className="w-[150px] sm:w-[200px] md:w-[250px] aspect-square bg-cover shopTheLook flex justify-center items-center overflow-hidden relative"
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className="w-full h-full flex justify-center items-center absolute inset-0 innerShopCard bg-[#0000007c] opacity-0 hover:opacity-100 transition-opacity duration-300">
        <Link to={redirect || '/products'} className='text-white bg-violet-500 p-2 rounded-lg font-medium'>
          SHOP THE LOOK
        </Link>
      </div>
    </div>
  );
}

export default ShopTheLookCard;
