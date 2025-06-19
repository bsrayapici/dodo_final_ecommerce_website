import React from 'react';
import model from '../assets/images/biginjapan.png'; // Senin görsel ismin neyse onu yaz

const CtaSection = () => {
    return (
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          
          {/* Görsel Alanı */}
          <div className="w-full md:w-1/2">
            <img
              src={model}
              alt="Call to Action"
              className="w-full h-auto object-contain"
            />
          </div>
  
          {/* İçerik Alanı */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-sm text-gray-400 uppercase mb-2">Summer 2020</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#252B42] mb-4">
              Part of the Neural Universe
            </h2>
            <p className="text-gray-600 mb-6">
              We know how large objects will act, but things on a small scale.
            </p>
  
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-[#2DC071] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#26a15c] transition">
                Buy Now
              </button>
              <button className="border border-[#2DC071] text-[#2DC071] font-semibold px-6 py-3 rounded-md hover:bg-[#f2f2f2] transition">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CtaSection;