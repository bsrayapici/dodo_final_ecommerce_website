import React from "react";  
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination } from "swiper/modules";
import slide1 from "../assets/images/slide1.jpg";

const slides = [
    { id: 1, image: slide1, title: 'Women’s Latest Fashion Sale' },
  ];

const HeroSlider = () => {
    return (

        <div className="w-full">
            <Swiper
            modules= {[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{clickable:true}}
            autoplay ={{delay:3000}}
            loop
            className="h-[400px] md:h-[600px]">
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="relative h-full">
                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <h2 className="text-white text-2xl md:text-4xl font-bold">{slide.title}</h2>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        );
      };
 

export default HeroSlider;