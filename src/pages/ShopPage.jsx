import React from "react";
import ProductCard from "../components/ProductCard";
import ShopCategoryCard from "../components/ShopCategoryCard";
import Breadcrumb from "../components/Breadcrumb";

// Import category images
import womenImage from '../assets/images/women.png';
import menImage from '../assets/images/men.png';
import accessoriesImage from '../assets/images/accessories.png';
import kidsImage from '../assets/images/kids.png';

const categories = [
  { id: 1, title: "CLOTHS", image: womenImage, itemCount: 5 },
  { id: 2, title: "CLOTHS", image: menImage, itemCount: 5 },
  { id: 3, title: "CLOTHS", image: accessoriesImage, itemCount: 5 },
  { id: 4, title: "CLOTHS", image: kidsImage, itemCount: 5 },
  { id: 5, title: "CLOTHS", image: womenImage, itemCount: 5 },
];

const ShopPage = () => {
  return (
    <div>
      <Breadcrumb />
      
      <div className="py-10 px-4 md:px-20">
        <h1 className="text-2xl font-bold mb-6 text-[#252B42]">Shop</h1>

        {/* CATEGORY SLIDER */}
        <div className="mb-8">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {categories.map((category) => (
              <div key={category.id} className="flex-shrink-0">
                <ShopCategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>

        {/* FILTER + VIEW CONTROLS */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 text-sm">
          <span className="text-[#737373]">Showing all 12 results</span>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[#737373] mr-2">Views:</span>
            <button className="border border-gray-300 p-2 hover:bg-gray-50">
              <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                <div className="bg-gray-400"></div>
                <div className="bg-gray-400"></div>
                <div className="bg-gray-400"></div>
                <div className="bg-gray-400"></div>
              </div>
            </button>
            <button className="border border-gray-300 p-2 hover:bg-gray-50">
              <div className="w-4 h-4 flex flex-col gap-0.5">
                <div className="bg-gray-400 h-1"></div>
                <div className="bg-gray-400 h-1"></div>
                <div className="bg-gray-400 h-1"></div>
              </div>
            </button>
            <select className="border border-gray-300 px-3 py-2 rounded text-[#737373]">
              <option>Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <button className="bg-[#23A6F0] text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Filter
            </button>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {[...Array(12)].map((_, i) => (
            <ProductCard 
              key={i} 
              product={{ 
                name: "Graphic Design", 
                category: "English Department", 
                price: 16.48, 
                colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"], 
                image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop" 
              }} 
            />
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center mb-10">
          <div className="flex border border-gray-300 rounded overflow-hidden">
            <button className="px-4 py-2 text-[#BDBDBD] hover:bg-gray-50 border-r border-gray-300">
              First
            </button>
            <button className="px-4 py-2 text-white bg-[#23A6F0] border-r border-gray-300">
              1
            </button>
            <button className="px-4 py-2 text-[#23A6F0] hover:bg-gray-50 border-r border-gray-300">
              2
            </button>
            <button className="px-4 py-2 text-[#23A6F0] hover:bg-gray-50 border-r border-gray-300">
              3
            </button>
            <button className="px-4 py-2 text-[#23A6F0] hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>

        {/* BRAND LOGOS */}
        <div className="flex flex-wrap justify-center items-center gap-8 py-12 opacity-60">
          {["Hooli", "Lyft", "Leaf", "Stripe", "AWS", "Reddit"].map((brand, i) => (
            <div key={i} className="text-[#737373] font-bold text-lg">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;