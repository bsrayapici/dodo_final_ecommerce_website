import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col items-center p-0 w-[239px] h-[427px] border rounded-md shadow-sm hover:shadow-lg transition">
      <div className="w-full h-[300px] overflow-hidden mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      <h3 className="font-semibold text-lg mb-1 text-center">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-2 text-center">{product.category}</p>

      <div className="flex items-center justify-center gap-2 mb-2">
        {product.colors.map((color, index) => (
          <span
            key={index}
            className="w-4 h-4 rounded-full inline-block"
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>

      <div className="font-bold text-black text-lg">${product.price}</div>
    </div>
  );
};

export default ProductCard;