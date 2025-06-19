import React from 'react';

import womenImage from '../assets/images/women.png';
import menImage from '../assets/images/men.png';
import accessoriesImage from '../assets/images/accessories.png';
import kidsImage from '../assets/images/kids.png';

const categories = [
  { id: 1, title: "Women", image: womenImage },
  { id: 2, title: "Men", image: menImage },
  { id: 3, title: "Accessories", image: accessoriesImage },
  { id: 4, title: "Kids", image: kidsImage },
];

const CategoryPick = () => {
  return (
    <div className="py-10 px-4 md:px-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Editor's Pick</h2>
      <p className="text-center text-gray-500 mb-8 text-sm md:text-base">
        Problems trying to resolve the conflict between
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
  {/* Men */}
  <div className="relative group cursor-pointer overflow-hidden rounded-md shadow-lg basis-full md:basis-[50%] md:max-w-[510px] md:h-[500px]">
    <img 
      src={menImage} 
      alt="Men" 
      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105" 
    />
    <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-semibold text-sm">
      MEN
    </div>
  </div>

  {/* Women */}
  <div className="relative group cursor-pointer overflow-hidden rounded-md shadow-lg basis-[48%] md:basis-[240px] md:h-[500px]">
    <img 
      src={womenImage} 
      alt="Women" 
      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105" 
    />
    <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-semibold text-sm">
      WOMEN
    </div>
  </div>

  {/* Accessories + Kids Nested */}
  <div className="flex flex-col gap-4 basis-[48%] md:basis-[240px]">
    <div className="relative group cursor-pointer overflow-hidden rounded-md shadow-lg h-[242px]">
      <img 
        src={accessoriesImage} 
        alt="Accessories" 
        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105" 
      />
      <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-semibold text-sm">
        ACCESSORIES
      </div>
    </div>

    <div className="relative group cursor-pointer overflow-hidden rounded-md shadow-lg h-[242px]">
      <img 
        src={kidsImage} 
        alt="Kids" 
        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105" 
      />
      <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-semibold text-sm">
        KIDS
      </div>
    </div>
  </div>
</div>
</div>
  );
};

export default CategoryPick;

//TODO: Burda kullanılan sınıfları öğren ve düzenle ayrıca kafalar kesik 
