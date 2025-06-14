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
    
    </header>
  );
};

export default Header;