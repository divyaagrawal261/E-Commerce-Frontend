import React from 'react'

function ShoppingBagCard({productName, category, rate, size}) {
  return (
    <div className='w-full my-3 mx-2 border rounded-lg h-fit flex gap-2 p-2 shadow-lg'>
      <img src="https://imagescdn.louisphilippe.com/img/app/product/3/39619589-12663641.jpg?auto=format&w=390" className="w-[150px] aspect-square object-cover rounded-md" alt={category} />
      <div>
        <h3 className='text-xl'>{productName || "Product Name"}</h3>
        <h3 className='font-semibold'>{rate || "899"}</h3>
        <h3>Size: {size || "M"}</h3>
        <label>Quantity</label>
        <input type="number" name="" id="" defaultValue={1} className='ml-2 w-[40%] border px-2'/>
        <br />
        <button className='border p-2 mt-2'>Remove</button>
      </div>
    </div>
  )
}

export default ShoppingBagCard