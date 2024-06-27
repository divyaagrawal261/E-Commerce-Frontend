import React from 'react'
import ProductCard from '../components/ProductCard'

function ProductsPage({productCategory, productsArray}) {
  return (<>
    <h2 className='text-center my-5 text-4xl'>Black Purl {productCategory || "Best Picks"}</h2>
    <div className="productsContainer max-w-[1200px] mx-auto grid md:grid-rows-3 md:grid-cols-4 grid-rows-6 grid-cols-2 gap-4 px-4 xl:px-0">
      {productsArray? productsArray.map(({src, name, rate, category})=><ProductCard className="mx-auto" src={src} category={category} name={name} rate={rate}/>) : "Loading..."}
    </div>
  </>)
}

export default ProductsPage