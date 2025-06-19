import React from "react";
import ProductCard from "./ProductCard";

// Import all the images
import slide1 from "../assets/images/slide1.jpg";
import lila from "../assets/images/lila.png";
import beyazli from "../assets/images/beyazlı.png";
import pembeli from "../assets/images/pembeli.png";
import mont from "../assets/images/mont.png";
import kahve from "../assets/images/kahve.png";
import bot from "../assets/images/bot.png";
import tommy from "../assets/images/tommy.png";
import zenco from "../assets/images/zenco.png";

const products = [
 
    {
        id: 2,
        name: 'Printed Shirt',
        image: lila, 
        price: 34.99,
        category: 'Men',
        colors: ['#000', '#F00', '#FFD700','#3498db', '#2ecc71'],
    },
    {
        id: 3,
        name: 'Sweater',
        image: beyazli, 
        price: 59.99,
        category: 'Kids',
        colors: ['#333', '#bbb'],
    },
    {
        id: 4,
        name: 'Black Jeans',
        image: pembeli, 
        price: 79.99,
        category: 'Accessories',
        colors: ['#000', '#F00', '#FFD700','#3498db', '#2ecc71'],
    },
    {
        id: 5,
        name: 'Jacket',
        image: mont, 
        price: 79.99,
        category: 'Accessories',
        colors: ['#000'],
    },
    {
        id: 6,
        name: 'Coffee Style',
        image: kahve, // Use imported image
        price: 79.99,
        category: 'Accessories',
        colors: ['#000'],
    },
    {
        id: 7,
        name: 'Boots',
        image: bot, 
        price: 79.99,
        category: 'Accessories',
        colors: ['#000', '#F00', '#FFD700','#3498db', '#2ecc71'],
    },
    {
        id: 8,
        name: 'Tommy Style',
        image: tommy, 
        price: 79.99,
        category: 'Accessories',
        colors: ['#FFD700','#3498db', '#2ecc71'],
    },
    {
        id: 9,
        name: 'Zenco Style',
        image: zenco, 
        price: 79.99,
        category: 'Accessories',
        colors: ['#000'],
    },
];

const ProductCategoryList = () => {
    return (
        <div className="py-16 px-4 md:px-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Featured Products</h2>
            <p className="text-center text-gray-500 mb-8 text-sm md:text-base">Problems trying to resolve the conflict between</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductCategoryList;