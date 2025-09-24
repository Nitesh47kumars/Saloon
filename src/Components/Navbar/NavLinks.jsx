import React from 'react';
import { Link } from 'react-scroll';

const navLinks = [
  { name: 'Home', to: '#' },
  { name: 'About', to: 'about' },
  { name: 'Services', to: 'services' },
  { name: 'Contact', to: 'contact' },
];

const NavLinks = ({ isMobile = false }) => {
  return (
    <>
      {navLinks.map((link) => (
        <Link
        smooth={true}
        duration={600}
        spy={true}
          key={link.name}
          to={link.to}
          className={
            isMobile
              ? 'block py-2 text-gray-700 hover:text-blue-600'
              : 'text-gray-700 hover:text-blue-600 cursor-pointer'
          }
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
