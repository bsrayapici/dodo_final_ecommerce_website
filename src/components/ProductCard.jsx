import React from "react";

const ProductCard = ({product}) => {
    return (
        
        <div className="border rounded-md p-4 shadow-sm hover:shadow-lg transition">
            <div className="w-full h-[300px] overflow-hidden mb-4">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
            </div>

            <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{product.category}</p>

            <div className="flex items-center gap-2 mb-2">
                {product.colors.map((color,index)=>(
                    <span
                        key={index}
                        className={"w-4 h-4 rounded-full"}
                        style = {{backgroundColor:color}} />
                    
                ))}
            </div>
            <div className="font-bold text-black text-lg">${product.price}</div>

        </div>
        

    );
};
export default ProductCard;