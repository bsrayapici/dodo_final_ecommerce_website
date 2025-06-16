import React, { useState } from "react";
import { Menu, X, ShoppingCart, User, Search, Heart } from "lucide-react";

const navigation = ["Home", "Shop", "About", "Blog", "Contact", "Pages"];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 bg-white z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-bold text-xl">Bandage</div>

        <div className="hidden md:flex space-x-6">
          {navigation.map((item) => (
            <a href="#" key={item} className="text-gray-600 hover:text-black">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <User className="w-5 h-5 text-blue-500" />
          <a href="/login" className="text-sm text-blue-500 hover:text-black">
            Login / Register
          </a>
          <Search className="w-5 h-5 text-blue-500" />
          <ShoppingCart className="w-5 h-5 text-blue-500" />
          <Heart className="w-5 h-5 text-blue-500" />
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow absolute w-full z-40">
          <div className="flex flex-col items-center py-4 space-y-2">
            {navigation.map((item) => (
              <a href="#" key={item} className="text-gray-600 hover:text-black">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
