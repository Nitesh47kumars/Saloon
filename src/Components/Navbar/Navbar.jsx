// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import NavLogo from './NavLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 left-0 w-full z-50">
      <div className="w-full xl:w-[80%] mx-auto px-4 md:px-10">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <NavLogo/>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            <NavLinks />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && <MobileMenu />}
    </nav>
  );
};

export default Navbar;
