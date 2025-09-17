// src/components/Navbar/MobileMenu.jsx
import React from 'react';
import NavLinks from './NavLinks';

const MobileMenu = () => {
  return (
    <div className="md:hidden px-4 pb-4 bg-white shadow-md">
      <NavLinks isMobile />
    </div>
  );
};

export default MobileMenu;
