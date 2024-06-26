import React from 'react';

function Carousel2Card({ src, tag }) {
  return (
    <div
      className="w-[244px] h-[189px] bg-cover px-2"
      style={{ backgroundImage: `url(${src})` }}
    >
      <span className="absolute bottom-1 left-1 text-white font-semibold bg-opacity-75 p-1 rounded">{tag}</span>
    </div>
  );
}

export default Carousel2Card;
