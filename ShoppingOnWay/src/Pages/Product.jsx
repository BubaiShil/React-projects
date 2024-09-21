import React from 'react';
import useShop from '../Context/Store';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay';

const Product = () => {
  const { items } = useShop();
  const { productId } = useParams();

  const product = items.find((e) => e.id === productId); 
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
