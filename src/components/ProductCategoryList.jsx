import React from "react";
import ProductCard from "./ProductCard";

// Use placeholder images from a reliable CDN for StackBlitz compatibility
const products = [
    {
        id: 1,
        name: "White Tshirt",
        image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 29.99,
        category: "Women",
        colors: ['#000', '#F00', '#FFD700'],
    },
    {
        id: 2,
        name: 'Printed Shirt',
        image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 34.99,
        category: 'Men',
        colors: ['#3498db', '#2ecc71'],
    },
    {
        id: 3,
        name: 'Sweater',
        image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 59.99,
        category: 'Kids',
        colors: ['#333', '#bbb'],
    },
    {
        id: 4,
        name: 'Black Jeans',
        image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 79.99,
        category: 'Accessories',
        colors: ['#000'],
    },
    {
        id: 5,
        name: 'Jacket',
        image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 89.99,
        category: 'Outerwear',
        colors: ['#8B4513'],
    },
    {
        id: 6,
        name: 'Coffee Style',
        image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 65.99,
        category: 'Casual',
        colors: ['#D2691E'],
    },
    {
        id: 7,
        name: 'Boots',
        image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 120.99,
        category: 'Footwear',
        colors: ['#000'],
    },
    {
        id: 8,
        name: 'Tommy Style',
        image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 95.99,
        category: 'Premium',
        colors: ['#FF0000'],
    },
    {
        id: 9,
        name: 'Zenco Style',
        image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400",
        price: 75.99,
        category: 'Modern',
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