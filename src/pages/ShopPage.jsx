import React, {useState} from "react";
import ProductCard from "../components/ProductCard"; // varsa


const ShopPage = () => {
  return (
    <div className="py-10 px-4 md:px-20">
      <h1 className="text-xl font-bold mb-6">Shop</h1>

      {/* CATEGORY SLIDER */}
      <div className="mb-6">
        {/* <CategorySlider /> */}
        <div className="flex gap-4 overflow-auto">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="min-w-[140px] h-[160px] bg-gray-100 flex items-center justify-center text-center"
            >
              CLOTHS
            </div>
          ))}
        </div>
      </div>

      {/* FILTER + VIEW CONTROLS */}
      <div className="flex justify-between items-center mb-4 text-sm">
        <span>Showing all 12 results</span>
        <div className="flex gap-2">
          <button className="border px-2 py-1">Grid</button>
          <button className="border px-2 py-1">List</button>
          <select className="border px-2 py-1">
            <option>Popularity</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <button className="bg-blue-500 text-white px-3 py-1 rounded">Filter</button>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="flex flex-wrap gap-6 justify-center md:justify-start">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-[calc(50%-0.75rem)] md:w-[calc(25%-1.5rem)]">
            <ProductCard product={{ name: "Graphic Design", category: "English Dept", price: 6.48, colors: ["#000", "#f00"], image: "https://via.placeholder.com/300x400" }} />
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center mt-8">
        {/* <Pagination /> */}
        <div className="flex border rounded overflow-hidden">
          <button className="px-4 py-2 hover:bg-gray-100">First</button>
          <button className="px-4 py-2 bg-blue-500 text-white">2</button>
          <button className="px-4 py-2 hover:bg-gray-100">Next</button>
        </div>
      </div>

      {/* BRAND LOGOS */}
      <div className="flex flex-wrap justify-center items-center gap-6 mt-10 opacity-60">
        {["hooli", "lyft", "leaf", "stripe", "aws", "reddit"].map((brand, i) => (
          <img key={i} src={`/${brand}.svg`} alt={brand} className="h-8 object-contain" />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;