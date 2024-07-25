import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#Products", label: "Products" },
    { href: "#homes", label: "Homes" },
    { href: "#services", label: "Services" },
    { href: "#About us", label: "About us" },
    { href: "#Contact Us", label: "Contact Us" },
  ];

  return (
    <div className="bg-[#BBE2EC] shadow-md">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src='' alt="HELPEASY" className="h-8 mr-4" />
            <nav className="hidden md:block">
              <ul className="flex space-x-8 ml-40">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-gray-600 hover:text-black font-semibold">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for 'Movers and Packers'"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-full w-64"
              />
            </div>
            <FaShoppingCart className="text-gray-600 text-xl" />
            <FaUser className="text-gray-600 text-xl" />
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-black"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-300">
              <div className="flex items-center px-5">
                <div className="relative flex-grow">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for 'Movers and Packers'"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border rounded-full w-full"
                  />
                </div>
                <FaShoppingCart className="text-gray-600 text-xl ml-4" />
                <FaUser className="text-gray-600 text-xl ml-4" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
