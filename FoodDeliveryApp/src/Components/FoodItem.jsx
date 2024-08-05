import { React, useState } from 'react'
import { assets } from '../assets/assets'
import useFood from '../Context/Store'

const FoodItem = ({ id, image, description, price, name }) => {


    //const [foodCount, setFoodCount] = useState(0)

    const {cartItems,addToCart,removeFromCart}= useFood()

    return (
        <div className='mb-5 relative'>
            <img src={image} alt="" className='rounded-2xl w-full' />

            <div className='absolute inset-0 flex flex-col justify-center items-center gap-3 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl'>

                <h2 className='text-white text-2xl'>{name}</h2>
                <p className='text-white text-center'>{description}</p>
                <p className='text-white text-lg font-bold'>${price}</p>
                <img className='w-40' src={assets.rating_starts} alt="" />
                <div className='absolute inset-3'>
                    {
                        !cartItems[id] ? (
                            <img onClick={() => addToCart(id)}
                                className='rounded-sm flex justify-start' src={assets.add_icon_white} alt="" />
                        ):(
                            <div className='flex gap-3'>
                                <img onClick={()=> addToCart(id)} src={assets.add_icon_green}  alt="" />
                                <p className='text-white text-xl'>{cartItems[id]}</p>
                                <img onClick={()=> removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>

    )
}

export default FoodItem
