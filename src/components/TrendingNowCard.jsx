import React from 'react';
import { useNavigate } from 'react-router-dom';

function TrendingNowCard({ src, name, category, rate }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${encodeURIComponent(name)}`, { state: { src, name, category, rate } });
  };

  return (
    <div className='xl:w-[275px] lg:w-full h-fit hover:cursor-pointer' onClick={handleClick}>
      <img src={src} alt="Trending" className='xl:h-[400px] w-full'/>
      <span className='block my-1'>{category}</span>
      <span className='block my-1 text-xl font-serif'>{name}</span>
      <span className='block my-1 text-xl font-semibold'>{rate}</span>
    </div>
  );
}

export default TrendingNowCard;
