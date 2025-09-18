// src/components/Services/ServiceItem.jsx

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ServiceItem = ({ title, description, image, features = [], reverse }) => {
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
          className="w-full h-[300px] md:h-[350px] object-cover rounded-lg shadow-xl"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2">
        <h3 className="text-3xl font-semibold text-pink-600 mb-4">{title}</h3>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">{description}</p>

        {/* Features List */}
        <ul className="space-y-3">
          {features.map((item, idx) => (
            <li key={idx} className="flex items-start text-gray-600 text-md">
              <FaCheckCircle className="text-pink-500 mt-1 mr-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceItem;
