import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User, Search, Heart } from "lucide-react";

const navigation = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
  { label: "Pages", path: "/pages" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 bg-white z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-bold text-xl">Bandage</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="text-gray-600 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Icons & Menu Toggle */}
        <div className="flex items-center space-x-4">
          <User className="w-5 h-5 text-blue-500" />
          <Link to="/login" className="text-sm text-blue-500 hover:text-black">
            Login / Register
          </Link>
          <Search className="w-5 h-5 text-blue-500" />
          <ShoppingCart className="w-5 h-5 text-blue-500" />
          <Heart className="w-5 h-5 text-blue-500" />
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow absolute w-full z-40">
          <div className="flex flex-col items-center py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}