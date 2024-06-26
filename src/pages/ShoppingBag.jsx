import React from 'react'
import ShoppingBagCard from '../components/ShoppingBagCard'
import OrderSummaryCard from '../components/OrderSummaryCard'

function ShoppingBag() {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1'>
        <div className="w-full border p-8">
            <h4 className='text-4xl'>My Shopping Bag</h4>
            <hr className="my-4"/>
            <ShoppingBagCard/>
            <ShoppingBagCard/>
        </div>
        <div className="w-full border">
            <h4 className="text-3xl p-8">Order Summary</h4>
            <OrderSummaryCard/>
        </div>
    </div>
  )
}

export default ShoppingBag