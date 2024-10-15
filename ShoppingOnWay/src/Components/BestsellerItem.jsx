import React from 'react'
import useShop from '../Context/Store';
import BestsellerPage from './BestsellerPage';

const BestsellerItem = () => {

    const {bestSeller} = useShop()

  return (
    <div className='px-4 py-6'>
            <h1 className='text-3xl font-bold text-center mb-8'>Best Seller</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center items-center'>
                {bestSeller.map(item => (
                    <BestsellerPage
                        key={item.id}
                        name={item.item_name}
                        price={item.current_price}
                        company={item.company}
                        image={item.image}
                        id={item.id}
                    />
                ))}
            </div>
        </div>
  )
}

export default BestsellerItem
