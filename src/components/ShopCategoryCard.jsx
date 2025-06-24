import React from 'react';

const ShopCategoryCard = ({ category }) => {
  return (
    <div className="relative group cursor-pointer overflow-hidden rounded-md shadow-lg w-[205px] h-[223px] border-l border-gray-200">
      <img 
        src={category.image} 
        alt={category.title} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center text-white">
        <h3 className="text-lg font-bold mb-2">{category.title}</h3>
        <p className="text-sm">{category.itemCount} Items</p>
      </div>
    </div>
  );
};

export default ShopCategoryCard; 