import React from 'react';
import { motion } from 'framer-motion';
import { animation } from '../../Motion/Animation';

const AboutImage = () => {
  return (
    <motion.div
      variants={animation("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full md:w-1/2"
    >
      <img
        src="https://content.jdmagicbox.com/v2/comp/valsad/n6/9999p2632.2632.250318195320.u2n6/catalogue/dxvnuv3dolcnuiw-mjpei1s3ey.jpg"
        alt="Salon interior or team"
        className="rounded shadow-2xl w-full"
      />
    </motion.div>
  );
};

export default AboutImage;
