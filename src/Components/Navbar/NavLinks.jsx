import React from 'react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const NavLinks = ({ isMobile = false }) => {
  return (
    <>
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={
            isMobile
              ? 'block py-2 text-gray-700 hover:text-blue-600'
              : 'text-gray-700 hover:text-blue-600'
          }
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default NavLinks;
