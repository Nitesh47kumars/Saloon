// src/components/Services/Services.jsx

import React from 'react';
import ServiceItem from './ServiceItem';

// Sample services data
const services = [
  {
    title: 'Hair Styling & Cuts',
    description: 'Trendy haircuts, blowouts, and styling tailored to your face shape and lifestyle.',
    image: 'https://media.istockphoto.com/id/1349298950/photo/close-up-of-unrecognizable-hairdresser-cutting-a-female-customer%C3%A2s-hair.jpg?s=612x612&w=0&k=20&c=s-FpOPuIcR5ULS7pKldF2AMNgmD2-sq_wzsTzqPUoxM=',
  },
  {
    title: 'Bridal Makeup',
    description: 'Flawless makeup and styling to make you look stunning on your big day.',
    image: 'https://images.jdmagicbox.com/v2/comp/def_content/ncat_id/11271913-4-250.jpg',
  },
  {
    title: 'Facials & Skin Care',
    description: 'Relaxing facials and skin treatments using premium products to rejuvenate your skin.',
    image: 'https://media.istockphoto.com/id/143920428/photo/young-beautiful-woman-having-various-facial-treatment.jpg?s=612x612&w=0&k=20&c=vr_1cfNwvKO7qBSiaR9IoGHrH0onFjMuKVjJYS3NsTE=',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-16">Our Services</h2>

        <div className="space-y-20">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              reverse={index % 2 !== 0} // Alternate layout
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
