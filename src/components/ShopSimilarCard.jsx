import React from 'react'

function ShopSimilarCard({category, name, rate}) {
  return (
    <div className='p-4'>
        <img src="https://assets.trendin.com/img/app/categorymedia/production/4/422-131-13447.png?auto=format&w=270" alt="" className='w-full aspect-square'/>
        <span className='block my-1'>{category || "Category"}</span>
        <span className='block my-1 text-xl font-serif'>{name || "Name"}</span>
        <span className='block my-1 text-xl font-semibold'>{rate || "899"}</span>
    </div>
  )
}

export default ShopSimilarCard