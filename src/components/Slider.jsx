import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import greenslider from "../assets/images/greenslider.png";

const items = [
  {
    id: 1,
    title: "Vita Classic Product",
    subtitle: "Summer 2025",
    description: "Discover the ultimate freshness and minimalist style.",
    price: "$16.48",
    image: greenslider,
  },
  {
    id: 2,
    title: "Vita Classic Product",
    subtitle: "Summer 2025",
    description: "Discover the ultimate freshness and minimalist style.",
    price: "$16.48",
    image: greenslider,
  },
];

const Slider = () => {
  return (
    <div className="py-16 px-4 md:px-20 text-white" style={{ backgroundColor: "#23856D" }}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 5000 }}
        loop
        navigation
        pagination={{ clickable: true }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <p className="uppercase text-sm mb-2">{item.subtitle}</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{item.title}</h2>
                <p className="mb-6">{item.description}</p>
                <div className="flex flex-col md:flex-row gap-4">
                  <span className="text-xl font-bold">{item.price}</span>
                  <button
                    className="text-white px-4 py-2 font-semibold rounded hover:bg-gray-100"
                    style={{ backgroundColor: "#2DC071" }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="flex-1">
                <img src={item.image} alt={item.title} className="w-full h-auto object-contain" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
            
      <style>{`
  .swiper-pagination-bullet {
    width: 30px;
    height: 4px;
    border-radius: 2px;
    background: white;
    opacity: 0.5;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background: white;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }
`}</style>
      
          </div>
          
        );
      };
 

export default Slider;