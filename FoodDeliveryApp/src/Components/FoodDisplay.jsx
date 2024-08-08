import React from 'react'
// import {useFood, ContextProvider, storeContext } from '../Context/Store'
import useFood from "../Context/Store"
import FoodItem from './FoodItem'
//import contextValue from "../Context/Store"

const FoodDisplay = () => {

    //    const {food_list} = useContext(storeContext)
    const { food_list } = useFood()

    return (

        <div>
            <h1 className='ml-28 mr-24 text-3xl font-bold mb-8 text-orange-600'>Hover over the images to see more information</h1>
            <div className='grid  grid-cols-4 gap-4 ml-28 mr-24'>

                {food_list.map((e, index) => {
                    return <FoodItem key={index} id={e._id} name={e.name} description={e.description} price={e.price} image={e.image} />
                })}
            </div>
        </div>
    )
}

export default FoodDisplay


