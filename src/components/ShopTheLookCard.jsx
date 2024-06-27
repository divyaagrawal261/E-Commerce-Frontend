import React from 'react'
import { Link } from 'react-router-dom'

function ShopTheLookCard({src, redirect}) {
  return (
    <div className="w-[300px] aspect-square bg-cover shopTheLook flex justify-center items-center overflow-hidden" style={{ backgroundImage: `url(${src})` }} >
      <div className="w-[300px] aspect-square  hidden justify-center items-center innerShopCard bg-[#0000007c]">
        <Link to="/products" className='text-white p-2 border-2 border-white  hover:bg-[#0000004b]'>SHOP THE LOOK</Link>
      </div>
    </div>
  )
}

export default ShopTheLookCard