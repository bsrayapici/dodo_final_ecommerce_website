import React from 'react';

// Use reliable external images for StackBlitz compatibility
const categoryImages = {
  women: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
  men: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600",
  accessories: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600",
  kids: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600"
};

const categories = [
  { id: 1, title: "Women", image: categoryImages.women },
  { id: 2, title: "Men", image: categoryImages.men },
  { id: 3, title: "Accessories", image: categoryImages.accessories },
  { id: 4, title: "Kids", image: categoryImages.kids },
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
            src={categoryImages.men} 
            alt="Men" 
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-semibold text-sm">
            MEN
          </div>
        </div>

        {/* Women */}
        <div className="relative group cursor-pointer overflow-hidden rounded-md shadow-lg basis-[48%] md:basis-[240px] md:h-[500px]">
          <img 
            src={categoryImages.women} 
            alt="Women" 
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-semibold text-sm">
            WOMEN
          </div>
        </div>

        {/* Accessories + Kids Nested */}
        <div className="flex flex-col gap-4 basis-[48%] md:basis-[240px]">
          <div className="relative group cursor-pointer overflow-hidden rounded-md shadow-lg h-[242px]">
            <img 
              src={categoryImages.accessories} 
              alt="Accessories" 
              className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-semibold text-sm">
              ACCESSORIES
            </div>
          </div>

          <div className="relative group cursor-pointer overflow-hidden rounded-md shadow-lg h-[242px]">
            <img 
              src={categoryImages.kids} 
              alt="Kids" 
              className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105" 
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