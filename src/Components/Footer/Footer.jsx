// components/Footer/Footer.jsx

import React from "react";
import FooterSection from "./FooterSection";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10 pt-10 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 pb-10">
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

        <FooterSection title="Help">
          <FooterLink href="#" label="FAQs" />
          <FooterLink href="#" label="Contact Us" />
          <FooterLink href="#" label="Terms of Service" />
          <FooterLink href="#" label="Privacy Policy" />
        </FooterSection>

        <FooterSection title="Follow Us">
          <FooterLink href="#" label="Instagram" />
          <FooterLink href="#" label="Facebook" />
          <FooterLink href="#" label="Pinterest" />
          <FooterLink href="#" label="YouTube" />
        </FooterSection>
      </div>

      <div className="border-t py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Glamify Salon. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
