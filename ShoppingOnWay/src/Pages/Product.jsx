import React from 'react';
import useShop from '../Context/Store';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay';
import Navbar from '../Components/Navbar'

const Product = () => {
  const { items } = useShop();
  const { productId } = useParams();

  const product = items.find((e) => e.id === productId); 
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='flex flex-col'>
      <Navbar/>
      
      <ProductDisplay product={product}/>
    </div>
  );
};

export default Product;
