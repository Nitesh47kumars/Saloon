import React from "react";

const FooterSection = ({ title, children }) => {
  return (
    <div className="mb-6 sm:mb-0">
      <h4 className="text-md font-semibold text-gray-800 mb-4 uppercase tracking-wide">
        {title}
      </h4>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
};

export default FooterSection;
