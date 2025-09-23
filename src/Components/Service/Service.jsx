// src/components/Services/Services.jsx

import React from 'react';
import ServiceItem from './ServiceItem';
import services from './Services.json'

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 px-6 mt-25 md:mt-40">
      <div className="w-[90%] xl:w-[80%] mx-auto py-20 md:py-25">
        <h2 className="text-4xl font-extrabold text-center text-pink-600 uppercase">
          Our Services
        </h2>

        <div className="space-y-30 mt-20 md:mt-25">
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
