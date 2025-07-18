import React from "react";  
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination } from "swiper/modules";
import slide1 from "../assets/images/slide1.jpg";

const slides = [
    { id: 1, image: slide1, title:'NEW COLLECTION', subtitle: 'We know how large objects will act, but things on a small scale.' },
    { id: 2, image: slide1, title: 'Women\'s Latest Fashion Sale', subtitle: 'We know how large objects will act, but things on a small scale.'}
  ];

const HeroSlider = () => {
    return (

        <div className="w-full">
            <Swiper
            modules= {[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{clickable:true}}
            autoplay ={{delay:4000}}
            loop
            className="h-[400px] md:h-[600px]">
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="relative h-full">
                    <img
                     src={slide.image}
                     alt={slide.title} 
                     className="w-full h-full object-cover object-top transition-transform"
                      />
                    <div className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-20 space-y-4">
                        <h4 className="text-sm text-white opacity-80 uppercase tracking-wider">SUMMER 2025</h4>
                      <h2 className="text-3xl md:text-5xl text-white font-bold">{slide.title}</h2>
                      <p className="text-white text-sm md:text-base">{slide.subtitle}</p>
                      <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md">SHOP NOW</button>
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
      `}</style>
      
          </div>
          
        );
      };
 

export default HeroSlider;