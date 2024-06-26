import React from 'react'

function OrderSummaryCard({bagTotal}) {
  return (
    <div className='mx-auto w-[80%] shadow-lg rounded-lg border p-3'>
        <div className="grid grid-cols-2">
            <h2>Bag Total</h2>
            <h2 className='text-right'>{bagTotal || "299"}</h2>
            <h2>Product Savings</h2>
            <h2 className='text-right'>{bagTotal || "-299"}</h2>
            <h2>Shipping</h2>
            <h2 className='text-right'>{bagTotal || "299"}</h2>
        </div>
        <hr className='my-2'/>
        <div className="grid grid-cols-2">
            <h2>Bag Total</h2>
            <h2 className='text-right'>{bagTotal || "299"}</h2>
            <h2>(Includes Taxes)</h2>
        </div>
        <hr className='my-2'/>
        <button className='w-full p-2 bg-black text-white rounded-lg'>BUY NOW</button>
    </div>
  )
}

export default OrderSummaryCard