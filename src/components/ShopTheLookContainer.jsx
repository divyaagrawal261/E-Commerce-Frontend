import React from 'react';
import ShopTheLookCard from './ShopTheLookCard';
import { shopTheLooks } from '../constants';
import { Link } from 'react-router-dom';

function ShopTheLookContainer() {
  return (
    <>
      <div className='max-w-[1200px] mx-auto text-2xl sm:text-3xl lg:text-4xl mb-8 font-serif sm:px-4 xl:px-0 text-center'>
        Shop the Look
      </div>
      <div className='flex flex-wrap justify-center gap-4 max-w-[1200px] mx-auto sm:px-4 xl:px-0'>
        {shopTheLooks.map(({ src, redirect }) => (
          <ShopTheLookCard src={src} redirect={redirect} key={src} />
        ))}
      </div>
      <div className='max-w-fit mx-auto text-lg  mt-8 bg-violet-500 rounded-lg text-white p-3 flex justify-center hover:bg-black hover:text-white'>
        <Link to="/products">EXPLORE ALL LOOKS</Link>
      </div>
    </>
  );
}

export default ShopTheLookContainer;
