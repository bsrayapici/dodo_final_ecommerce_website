import React, { useState } from "react";
import { Menu, X, ShoppingCart, User, Search, Heart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigation = ["Home","Shop", "About", "Blog","Contact", "Pages" ];

  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <div className="font-bold text-xl">Bandage</div>  

      <div className="hidden md:flex space-x-6">
        {navigation.map((item)=> (
          <a href="#" key={item} className="text-gray-600 hover:text-black">{item}</a>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <User className="w-5 h-5 text-blue-500"/>
        <a href="/login" className="text-sm text-gray-700 text-blue-500 hover:text-black">Login / Register </a>
   
        <Search className="w-5 h-5 text-blue-500"/>
        <ShoppingCart className="w-5 h-5 text-blue-500"/>
        <Heart className="w-5 h-5 text-blue-500" />

        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

       {/* Mobile Menu */}
       {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white  flex  flex-col items-center py-4 space-y-2 shadow-md md:hidden">
          {navigation.map((item) => (
            <a href="#" key={item} className="text-gray-600 hover:text-black">{item}</a>
          ))}
        </div>

      )}
    </header>
  );
};

export default Header;