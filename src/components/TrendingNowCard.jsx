import React from 'react'

function TrendingNowCard({src, name, category, rate}) {
  return (
    <div className='w-[275px] h-fit'>
        <img src={src} alt="Trending" className='h-[400px] w-full'/>
        <span className='block my-1'>{category}</span>
        <span className='block my-1 text-xl font-serif'>{name}</span>
        <span className='block my-1 text-xl font-semibold'>{rate}</span>
    </div>
  )
}

export default TrendingNowCard