import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import ShopSimilarCard from '../components/ShopSimilarCard';
import TrendingNowContainer from "../components/TrendingNowContainer";

function DetailPage() {
  const location = useLocation();
  const { name } = useParams();
  
  const { src, category, rate } = location.state || {};

  const decodedName = decodeURIComponent(name);

  return (
    <>
      <h3 className='px-4 max-w-[1300px] mx-auto text-3xl my-4'>{`Black Purl ${category}` || "Black Purl Specials"}</h3>
      <div className="productContainer grid md:grid-cols-2 md:grid-rows-1 grid-cols-1">
        <div className="h-[564px] p-8 flex items-center justify-center">
          <img src={src} alt={decodedName} className='w-[500px] aspect-square'/>
        </div>
        <ProductDetails productName={decodedName} category={category} rate={rate}/>
      </div>
      <hr className='my-10'/>
      <h3 className='max-w-[1300px] mx-auto text-3xl my-4 px-4'>Shop similar</h3>
      <div className="grid md:grid-cols-4 md:grid-rows-1 grid-rows-2 grid-cols-2">
        <ShopSimilarCard />
        <ShopSimilarCard />
        <ShopSimilarCard />
        <ShopSimilarCard />
      </div>
      <br />
      <TrendingNowContainer />
    </>
  );
}

export default DetailPage;
