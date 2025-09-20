// src/components/Services/Services.jsx

import React from 'react';
import ServiceItem from './ServiceItem';
import services from './Services.json'

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 px-6 mt-25 md:mt-40 py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-pink-600 my-10 md:my-14 uppercase">
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
