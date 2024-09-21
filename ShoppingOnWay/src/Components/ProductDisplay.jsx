import React, { useState } from 'react'

const ProductDisplay = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1)

  const handleQuantityChange = (e) => {
    const newQty = Math.max(1, Number(e.target.value))
    setQuantity(newQty)
  }

  const handleBuyNow = () => {
    addToCart(product.id, quantity)
    alert(`Proceed to checkout with ${quantity} ${product.item_name}`)
  }

  return (
    <>
      
      <div className="max-w-4xl mx-auto bg-white p-4 shadow-lg rounded-lg mt-6">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        
          <div className="md:w-1/3 flex justify-center">
            <img className="w-full h-48 object-contain" src={product.image} alt={product.item_name} />
          </div>

          
          <div className="md:w-2/3">
            <h2 className="text-xl font-bold">{product.item_name}</h2>
            <h3 className="text-md text-gray-500 mt-1">{product.company}</h3>
            
            
            <div className="flex items-center space-x-4 mt-2">
              <span className="text-md line-through text-gray-500">₹{product.original_price}</span>
              <span className="text-xl font-bold text-green-600">₹{product.current_price}</span>
              <span className="text-sm font-semibold text-red-500">{product.discount}% off</span>
            </div>

            
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center">
                <span className="text-yellow-400 font-bold">{product.rating.stars}</span>
                <span className="ml-1 text-gray-500">({product.rating.count} ratings)</span>
              </div>
              <span className="text-sm text-gray-500">Return within {product.return_period} days</span>
            </div>

            
            <div className="flex items-center mt-3">
              <label htmlFor="quantity" className="mr-2 text-gray-600 font-semibold">Quantity:</label>
              <input 
                type="number" 
                id="quantity" 
                value={quantity} 
                onChange={handleQuantityChange} 
                className="w-16 p-1 border rounded-md text-center"
              />
            </div>

          
            <div className="mt-2 text-sm text-gray-600">
              Delivery by: <span className="font-semibold">{product.delivery_date}</span>
            </div>

            
            <div className="flex space-x-4 mt-4">
              <button 
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800" 
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
              <button 
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                onClick={() => addToCart(product.id, quantity)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      
      <div className="max-w-4xl mx-auto bg-gray-100 p-6 shadow-lg rounded-lg mt-6">
        <h2 className="text-2xl font-bold mb-4">Checkout Summary</h2>

        <div className="flex justify-between">
          <div className="flex flex-col space-y-2">
            <span className="text-lg font-semibold">Total Quantity: {quantity}</span>
            <span className="text-lg font-semibold">Total Price: ₹{(product.current_price * quantity).toFixed(2)}</span>
          </div>

          <div className="flex space-x-4">
            <button 
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800" 
              onClick={handleBuyNow}
            >
              Proceed to Checkout
            </button>
            <button 
              className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDisplay
