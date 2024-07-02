import React from 'react'

function ShoppingBagCard({productName, category, rate, size, src, quantity, id}) {

  function removeProduct()
  {
    fetch(`${process.env.REACT_APP_API_URL}/cart/remove`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      },
      body:JSON.stringify({ 
        productId:id
      })
    })
    window.location.reload();
  }

  function updateProduct(){
    fetch(`${process.env.REACT_APP_API_URL}/cart/add`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      },
      body:JSON.stringify({ 
        productId:id
      })
    })
    window.location.reload();
  }
  return (
    <div className='w-full my-3 mx-2 border rounded-lg h-fit flex gap-2 p-2 shadow-lg'>
      <img src={src} className="w-[150px] aspect-square object-cover rounded-md" alt={category} />
      <div>
        <h3 className='text-xl'>{productName || "Product Name"}</h3>
        <h3 className='font-semibold'>{rate || "899"}</h3>
        <h3>Size: {size || "M"}</h3>
        <label>Quantity</label>
        <input type="number" name="" id="" defaultValue={1} value={quantity} className='ml-2 w-[40%] border px-2' onChange={updateProduct}/>
        <br />
        <button className='border p-2 mt-2' onClick={removeProduct}>Remove</button>
      </div>
    </div>
  )
}

export default ShoppingBagCard