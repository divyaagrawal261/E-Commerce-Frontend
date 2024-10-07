import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

function ProductsPage({ productCategory }) {
  const [showLoader, setShowLoader] = useState(false);
  const [products, setProducts] = useState([]);

  async function getProducts() {
    setShowLoader(true);
    let response;

    // Check if a productCategory exists and fetch accordingly
    if (productCategory) {
      response = await fetch(`${process.env.REACT_APP_API_URL}/products/category/${productCategory}`);
    } else {
      response = await fetch(`${process.env.REACT_APP_API_URL}/products/all`);
    }

    if (response.ok) {
      const productsArray = await response.json();
      setProducts(productsArray);
    }
    setShowLoader(false);
  }

  // Run getProducts whenever the productCategory prop changes
  useEffect(() => {
    getProducts();
  }, [productCategory]); // <-- Now the effect depends on productCategory


  return (
    <>
      {showLoader && (
        <div className="loaderContainer absolute z-20 h-screen w-full flex flex-col justify-center items-center bg-white/50 backdrop-blur-sm text-3xl font-semibold">
          <div className="loadingAnimation"></div>
          Loading...
        </div>
      )}
      <h2 className='text-center my-5 text-4xl'>Black Purl {productCategory || "Best Picks"}</h2>
      <div className="productsContainer max-w-[1200px] mx-auto grid md:grid-rows-3 md:grid-cols-4 grid-rows-6 grid-cols-2 gap-4 px-4 xl:px-0">
        {products.length > 0 ? (
          products.map(({ src, name, rate, category, desc, _id }) => (
            <ProductCard key={_id} className="mx-auto" src={src} category={category} name={name} rate={rate} id={_id} desc={desc}/>
          ))
        ) : (
          "Loading..."
        )}
      </div>
    </>
  );
}

export default ProductsPage;
