import  react from "react";
import ProductCard from "./ProductCard";

const products = [
    {
        id:1,
        name: "White Tshirt",
        image: "/assets/images/lila.png",
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
        image: "/assets/images/lila.png",
        price: 59.99,
        category: 'Kids',
        colors: ['#333', '#bbb'],
      },
      {
        id: 4,
        name: 'Black Jeans',
        image: "/assets/images/lila.png",
        price: 79.99,
        category: 'Accessories',
        colors: ['#000'],
      },
];

const ProductCategoryList = () => {
    return (
        <div className="py-16 px-4 md:px20">
            
        </div>

    );
};

export default ProductCategoryList;