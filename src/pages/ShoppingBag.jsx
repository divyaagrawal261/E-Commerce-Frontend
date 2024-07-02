import React, { useState, useEffect } from 'react';
import ShoppingBagCard from '../components/ShoppingBagCard';
import OrderSummaryCard from '../components/OrderSummaryCard';
import { useNavigate } from 'react-router-dom';

function ShoppingBag() {

  const navigate = useNavigate();

  const [showLoader, setShowLoader] = useState(false);
  const [cart, setCart] = useState(null);
  
  if(localStorage.getItem('isLoggedIn') !== 'true')
  navigate("/login")

  async function getCart() {
    setShowLoader(true);
    const response = await fetch(`${process.env.REACT_APP_API_URL}/cart/show`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      }
    });

    if (response.ok) {
      const cartData = await response.json();
      setCart(cartData);
    } else {
      console.error('Failed to fetch cart:', response.statusText);
    }
    setShowLoader(false);
  }

  useEffect(() => {
    getCart();
  }, []);

  if (!cart) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {showLoader && (
        <div className="loaderContainer absolute z-20 h-screen w-full flex flex-col justify-center items-center bg-white/50 backdrop-blur-sm text-3xl font-semibold">
          <div className="loadingAnimation"></div>
          Loading...
        </div>
      )}
      <div className='grid md:grid-cols-2 grid-cols-1'>
        <div className="w-full border p-8">
          <h4 className='text-4xl'>My Shopping Bag</h4>
          <hr className="my-4" />
          {cart.products && cart.products.length > 0 ? (
            cart.products.map(({ productId, quantity }) => (
              <ShoppingBagCard
                key={productId._id}
                productName={productId.name}
                rate={productId.rate}
                src={productId.src}
                quantity={quantity}
                id={productId._id}
              />
            ))
          ) : (
            <p>Your shopping bag is empty.</p>
          )}
        </div>
        <div className="w-full border">
          <h4 className="text-3xl p-8">Order Summary</h4>
          <OrderSummaryCard cart={cart} />
        </div>
      </div>
    </>
  );
}

export default ShoppingBag;
