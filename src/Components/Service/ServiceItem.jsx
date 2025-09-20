import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import {animation} from '../../Motion/Animation'
import {motion} from 'framer-motion'

const ServiceItem = ({ title, description, image, features = [], reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-10 ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Image */}
      <motion.div
      variants={animation(`${reverse ? "left" : "right" }`,0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{once:true,amount:0}}
      className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-[300px] md:h-[500px] object-cover rounded-lg shadow-xl"
        />
      </motion.div>

      {/* Content */}
      <div className="w-full md:w-1/2">
        <motion.h3 
        variants={animation("down",0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{once:true,amount:0}}
        className="text-3xl font-semibold text-pink-600 mb-4">{title}</motion.h3>

        <motion.p 
        variants={animation("down",0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{once:true,amount:0}}
        className="text-gray-700 text-lg leading-relaxed mb-6">{description}</motion.p>

        {/* Features List */}
        <motion.ul
        variants={animation("down",0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{once:true,amount:0}}
        className="space-y-3">
          {features.map((item, idx) => (
            <motion.li key={idx} 
            variants={animation("down", 0.3 * idx)}
            initial="hidden"
            whileInView="show"
            viewport={{once:true,amount:0}}
            className="flex items-start text-gray-600 text-md">
              <FaCheckCircle className="text-pink-500 mt-1 mr-2" />
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default ServiceItem;
