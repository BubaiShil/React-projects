import React from 'react'
import { items } from '../assets/data/items'
// import CardsPage from './FeaturedPage'
import FeaturedPage from './FeaturedPage'
import { motion } from 'framer-motion'

const FeaturedItem = () => {

    //console.log(items);


    return (
        <div className='px-4 py-6 bg-white'>
            <motion.h1 initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 6, ease: "easeOut" }} className='text-3xl font-bold text-center mb-8'>Our Featured Products</motion.h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center items-center'>
                {items.map(item => (
                    <FeaturedPage
                        key={item.id}
                        name={item.item_name}
                        price={item.original_price}
                        discount={item.current_price}
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
