import React, { useState } from "react";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigation = ["Home", "Product", "Pricing", "Contact"];

  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <div className="font-bold text-xl">Bandage</div>
      <nav className="hidden md:flex gap-4">
        {navigation.map((item, idx) => (
          <a key={idx} href="#" className="hover:underline">
            {item}
          </a>
        ))}
      </nav>
      <div className="flex gap-4">
        <Search />
        <User />
        <ShoppingCart />
      </div>
    </header>
  );
};

export default Header;