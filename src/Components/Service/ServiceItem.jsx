// src/components/Services/ServiceItem.jsx

import React from 'react';

const ServiceItem = ({ title, description, image, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-10 ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl md:text-3xl font-semibold text-pink-600 mb-4">
          {title}
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
