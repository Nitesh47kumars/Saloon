// components/Footer/FooterSection.jsx

import React from "react";

const FooterSection = ({ title, children }) => {
  return (
    <div>
      <h4 className="text-md font-semibold text-gray-800 mb-3">{title}</h4>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
};

export default FooterSection;
