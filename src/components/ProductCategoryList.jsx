import  react from "react";
import ProductCard from "./ProductCard";
import slide1 from "../assets/images/slide1.jpg";




const products = [
    {
        id:1,
        name: "White Tshirt",
        image: "../assets/images/slide1.jpg",
        price: 29.99,
        category: "Women",
        colors: ['#000', '#F00', '#FFD700'],
    },
    {
        id: 2,
        name: 'Printed Shirt',
        image: "/assets/images/lila.png",
        price: 34.99,
        category: 'Men',
        colors: ['#3498db', '#2ecc71'],
      },
      {
        id: 3,
        name: 'Sweater',
        image: "/assets/images/beyazlı.png",
        price: 59.99,
        category: 'Kids',
        colors: ['#333', '#bbb'],
      },
      {
        id: 4,
        name: 'Black Jeans',
        image: "/assets/images/pembeli.png",
        price: 79.99,
        category: 'Accessories',
        colors: ['#000'],
      },
      {
        id: 5,
        name: 'Black Jeans',
        image: "/assets/images/mont.png",
        price: 79.99,
        category: 'Accessories',
        colors: ['#000'],
      },
      {
        id: 6,
        name: 'Black Jeans',
        image: "/assets/images/kahve.png",
        price: 79.99,
        category: 'Accessories',
        colors: ['#000'],
      },
      {
        id: 7,
        name: 'Black Jeans',
        image: "/assets/images/bot.png",
        price: 79.99,
        category: 'Accessories',
        colors: ['#000'],
      },
      {
        id: 8,
        name: 'Black Jeans',
        image: "/assets/images/tommy.png",
        price: 79.99,
        category: 'Accessories',
        colors: ['#000'],
      },
      {
        id:9,
        name: 'Test',
        image: "/assets/images/zenco.png",
        price: 79.99,
        category: 'Accessories',
        colors: ['#000'],
      },
];

const ProductCategoryList = () => {
    return (
        <div className="py-16 px-4 md:px20">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text center">Featured Products</h2>
            <p className="text-center text-gray-500 mb-8 text-sm md:text-base">Problems trying to resolve the conflict between</p>

            <div className="grid grid-cols-1"> {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))} </div>

        </div>

    );
};

export default ProductCategoryList;