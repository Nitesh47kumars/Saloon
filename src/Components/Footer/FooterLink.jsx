import React from "react";

const FooterLink = ({ href, label }) => {
  return (
    <li>
      <a
        href={href}
        className="text-sm text-gray-600 hover:text-pink-600 transition-colors duration-200"
      >
        {label}
      </a>
    </li>
  );
};

export default FooterLink;
