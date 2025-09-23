// components/Footer/Footer.jsx

import React from "react";
import FooterSection from "./FooterSection";
import FooterLink from "./FooterLink";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-5 text-gray-700 w-full">
      <div className="w-[90%] xl:w-[80%] mx-auto xl:px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
          <FooterSection title="Services">
            <FooterLink href="#" label="Hair Styling" />
            <FooterLink href="#" label="Makeup" />
            <FooterLink href="#" label="Nail Art" />
            <FooterLink href="#" label="Facials" />
            <FooterLink href="#" label="Spa Treatments" />
          </FooterSection>

          <FooterSection title="Quick Links">
            <FooterLink href="#" label="Book Appointment" />
            <FooterLink href="#" label="Pricing" />
            <FooterLink href="#" label="Offers" />
            <FooterLink href="#" label="Gift Cards" />
          </FooterSection>

          <FooterSection title="About Us">
            <FooterLink href="#" label="Our Story" />
            <FooterLink href="#" label="Careers" />
            <FooterLink href="#" label="Blog" />
            <FooterLink href="#" label="Testimonials" />
          </FooterSection>

          <FooterSection title="Support">
            <FooterLink href="#" label="FAQs" />
            <FooterLink href="#" label="Contact Us" />
            <FooterLink href="#" label="Terms & Conditions" />
            <FooterLink href="#" label="Privacy Policy" />
          </FooterSection>

          {/* Social */}
          <div className="mb-6 sm:mb-0">
            <h4 className="text-md font-semibold text-gray-800 mb-4 uppercase tracking-wide">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-pink-600 transition"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-pink-600 transition"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-pink-600 transition"
                aria-label="Pinterest"
              >
                <FaPinterestP size={18} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-pink-600 transition"
                aria-label="YouTube"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Glamify Salon. All rights reserved.</p>
          <p className="mt-4 sm:mt-0">Designed with 💖 by YourCompany</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
