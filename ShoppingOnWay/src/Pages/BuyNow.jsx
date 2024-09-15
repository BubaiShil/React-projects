import React from 'react'
import useShop from '../Context/Store'

const BuyNow = ({id}) => {

    const { addToCart } = useShop()

  return (
    <div>
      <div className='p-4 font-extrabold text-md rounded-xl text-white mt-9 cursor-pointer bg-black' onClick={() => addToCart(id)}>Add to Cart</div>
    </div>
  )
}

export default BuyNow
