import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import ShopCategoryCard from "../components/ShopCategoryCard";
import { Grid3X3, List } from "lucide-react";
import { FaRedditAlien, FaLyft, FaHooli, FaPiedPiperHat, FaStripe, FaAws } from "react-icons/fa";

// Görseli local path'ten alıyoruz
import sampleImage from "../assets/images/women.png";

// Kategori görselleri
import womenImage from "../assets/images/women.png";
import menImage from "../assets/images/men.png";
import accessoriesImage from "../assets/images/accessories.png";
import kidsImage from "../assets/images/kids.png";

// Kategori verisi
const categories = [
  { id: 1, title: "CLOTHS", image: womenImage, itemCount: 5 },
  { id: 2, title: "CLOTHS", image: menImage, itemCount: 5 },
  { id: 3, title: "CLOTHS", image: accessoriesImage, itemCount: 5 },
  { id: 4, title: "CLOTHS", image: kidsImage, itemCount: 5 },
  { id: 5, title: "CLOTHS", image: womenImage, itemCount: 5 },
];

// Marka logoları
const brands = [
  { name: "Hooli", logo: <FaHooli /> },
  { name: "Lyft", logo: <FaLyft /> },
  { name: "Leaf", logo: <FaPiedPiperHat /> },
  { name: "Stripe", logo: <FaStripe /> },
  { name: "AWS", logo: <FaAws /> },
  { name: "Reddit", logo: <FaRedditAlien /> },
];

const ShopPage = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("popularity");

  return (
    <div className="py-10 px-4 md:px-20">
      <h1 className="text-xl font-bold mb-6">Shop</h1>

      {/* Kategori Slider */}
      <div className="mb-8">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {categories.map((category) => (
            <div key={category.id} className="flex-shrink-0">
              <ShopCategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>

      {/* Filtre ve Görünüm Butonları */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 text-sm">
        <span className="text-[#737373]">Showing all 12 results</span>
        <div className="flex items-center gap-2">
          <span className="text-[#737373]">Views:</span>
          <button
            onClick={() => setViewMode("grid")}
            className={`border p-2 rounded transition-colors ${
              viewMode === "grid"
                ? "border-[#23A6F0] bg-[#23A6F0] text-white"
                : "border-gray-300 hover:bg-gray-50"
            }`}
          >
            <Grid3X3 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`border p-2 rounded transition-colors ${
              viewMode === "list"
                ? "border-[#23A6F0] bg-[#23A6F0] text-white"
                : "border-gray-300 hover:bg-gray-50"
            }`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded text-[#737373] bg-white"
          >
            <option value="popularity">Popularity</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
          <button className="bg-[#23A6F0] text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Filter
          </button>
        </div>
      </div>

      {/* Ürün Listesi */}
      <div
        className={`mb-8 ${
          viewMode === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            : "flex flex-col gap-4"
        }`}
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={
              viewMode === "list"
                ? "flex border rounded-lg p-4 hover:shadow-md transition-shadow"
                : ""
            }
          >
            {viewMode === "list" ? (
              <>
                <div className="w-32 h-32 flex-shrink-0 mr-4">
                  <img
                    src={sampleImage}
                    alt="Product"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">Graphic Design</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    English Department
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    {["#23A6F0", "#23856D", "#E77C40", "#252B42"].map(
                      (color, index) => (
                        <span
                          key={index}
                          className="w-4 h-4 rounded-full inline-block"
                          style={{ backgroundColor: color }}
                        ></span>
                      )
                    )}
                  </div>
                  <div className="font-bold text-black text-lg">$16.48</div>
                </div>
              </>
            ) : (
              <ProductCard
                product={{
                  name: "Graphic Design",
                  category: "English Department",
                  price: 16.48,
                  colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
                  image: sampleImage,
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Sayfalama */}
      <div className="flex justify-center mb-10">
        <div className="flex border border-gray-300 rounded overflow-hidden">
          {["First", "1", "2", "3", "Next"].map((label, i) => (
            <button
              key={i}
              className={`px-4 py-2 border-r border-gray-300 ${
                label === "1"
                  ? "text-white bg-[#23A6F0]"
                  : "text-[#23A6F0] hover:bg-gray-50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Marka Logoları */}
      <div className="flex flex-wrap justify-center items-center gap-8 py-12 opacity-60">
        {brands.map((brand, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-[#737373] font-bold text-lg"
          >
            <div className="text-8xl mb-2">{brand.logo}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;