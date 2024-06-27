import React from 'react'

function ProductCard({src, name, category, rate}) {
    return (
      <div className='xl:w-[275px] lg:w-full h-fit'>
        <img src={src} alt="Trending" className='xl:h-[400px] w-full'/>
        <span className='block my-1'>{category}</span>
        <span className='block my-1 text-xl font-serif'>{name}</span>
        <span className='block my-1 text-xl font-semibold'>{rate}</span>
    </div>
    )
  }

export default ProductCard