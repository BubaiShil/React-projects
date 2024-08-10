import React from 'react';
import { menu_list } from '../assets/assets';

const MenuItems = () => {
  return (
    <div className="pt-8 md:pt-0">
      <div className= "flex flex-col flex-wrap text-center mb-8 px-4">
        <h1 className="font-bold text-orange-600 text-3xl mb-4">Explore Our Delicious Menu</h1>
        <p className="text-base mb-2 font-semibold text-orange-500">Welcome to our restaurant! We are delighted to present a selection of our finest menu items for you to enjoy.</p>
        <p className="text-base text-orange-500 font-semibold">Scroll through our menu to see what we have to offer, and indulge in a delightful culinary experience.</p>
      </div>
      <div className="flex flex-wrap gap-16 ml-24 mr-24 justify-center overflow-x-auto whitespace-nowrap">
        {menu_list.map((item, index) => (
          <div key={index} className="inline-block">
            <img src={item.menu_image} alt={item.menu_name} className="w-24 object-cover" />
            <h3 className="text-center font-sans font-semibold text-lg mt-3">{item.menu_name}</h3>
          </div>
        ))}
      </div>
      <hr className="my-10 mr-28 ml-28 border-t-4 border-orange-600" />      
    </div>
  );
}

export default MenuItems;
