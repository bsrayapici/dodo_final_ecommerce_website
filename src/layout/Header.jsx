import React, { useState } from "react";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navigation = ["Home", "Product", "Pricing", "Contact"];

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="font-bold text-2xl text-gray-800">Bandage</div>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navigation.map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop Icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-blue-600 hover:text-blue-700">
                            <User size={20} />
                        </button>
                        <button className="text-gray-600 hover:text-blue-600">
                            <Search size={20} />
                        </button>
                        <button className="text-gray-600 hover:text-blue-600 relative">
                            <ShoppingCart size={20} />
                            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                1
                            </span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-600"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t">
                        {navigation.map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="block py-2 text-gray-600 hover:text-blue-600 font-medium"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;