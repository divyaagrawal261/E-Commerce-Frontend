import React from 'react'
import ShopTheLookCard from './ShopTheLookCard'
import { shopTheLooks } from '../constants'
import { Link } from 'react-router-dom'

function ShopTheLookContainer() {
  return (
    <>
    <div className='max-w-[1200px] mx-auto text-4xl mb-8 font-serif sm:px-4 xl:px-0'>Shop the Look</div>
    <div className='flex justify-center gap-2 max-w-[1200px] mx-auto sm:px-4 xl:px-0'>
{shopTheLooks.map(({src, redirect})=><ShopTheLookCard src={src} redirect={redirect}/>)}
    </div>
    <div className='max-w-fit mx-auto text-lg mt-8 p-2 border border-black flex justify-center hover:bg-black hover:text-white'>
        <Link to="/products">EXPLORE ALL LOOKS</Link>
    </div>
    </>
  )
}

export default ShopTheLookContainer