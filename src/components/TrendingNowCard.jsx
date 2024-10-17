import React from 'react';
import { useNavigate } from 'react-router-dom';

function TrendingNowCard({ src, name, category, rate }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${encodeURIComponent(name)}`, { state: { src, name, category, rate } });
  };

  return (
    <div className='w-full h-fit hover:cursor-pointer bg-slate-200 rounded-md p-2' onClick={handleClick}>
      <img src={src} alt="Trending" className='h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full object-cover'/>
      <span className='block my-1 text-sm sm:text-base'>{category}</span>
      <span className='block my-1 text-lg sm:text-xl font-serif'>{name}</span>
      <span className='block my-1 text-lg sm:text-xl font-semibold'>{rate}</span>
    </div>
  );
}

export default TrendingNowCard;
