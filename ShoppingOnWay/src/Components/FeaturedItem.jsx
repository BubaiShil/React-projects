import React from 'react'
import { items } from '../assets/data/items'
// import CardsPage from './FeaturedPage'
import FeaturedPage from './FeaturedPage'

const FeaturedItem = () => {

    //console.log(items);


    return (
        <div className='px-4 py-6'  data-scroll data-scroll-section data-scroll-speed=".5">
            <h1 className='text-3xl font-bold text-center mb-8'>Our Featured Products</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center items-center'>
                {items.map(item => (
                    <FeaturedPage
                        key={item.id}
                        name={item.item_name}
                        company={item.company}
                        image={item.image}
                        id={item.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default FeaturedItem
