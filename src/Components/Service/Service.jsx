// src/components/Services/Services.jsx

import React from 'react';
import ServiceItem from './ServiceItem';
import services from './Services.json'

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-16">
          Our Services
        </h2>

        <div className="space-y-24">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              features={service.features}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
