import React, { useContext } from 'react'
// import {useFood, ContextProvider, storeContext } from '../Context/Store'
import useFood from "../Context/Store"
//import contextValue from "../Context/Store"

const FoodDisplay = (props) => {

//    const {food_list} = useContext(storeContext)


    const {food_list} = useFood()
    return (
        <div className='grid grid-cols-4 gap-4 ml-28 mr-24'>
            {food_list.map((e)=>{
                return (
                    <div  className='mb-5 '>
                    <div key={e._id} className=''>
                    <img src={e.image} alt="" className=' '/>
                    </div>
                    </div>
                )
            })}


            
        </div>
    )
}

export default FoodDisplay
