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
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div key={cat.id} className="relative group cursor-pointer overflow-hidden rounded-md shadow-lg">
            <img 
              src={cat.image} 
              alt={cat.title} 
              className="w-full h-40 md:h-60 object-cover transition-transform duration-300 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold">{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPick;

//TODO: Burda kullanılan sınıfları öğren ve düzenle
