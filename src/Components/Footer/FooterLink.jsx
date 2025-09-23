// components/Footer/FooterLink.jsx

import React from "react";

const FooterLink = ({ href, label }) => {
  return (
    <a
      href={href}
      className="text-sm text-gray-500 hover:text-pink-500 transition"
    >
      {label}
    </a>
  );
};

export default FooterLink;