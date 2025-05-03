import React from "react";

const Footer = () => {
  return (
   <footer className="bg-rose-600 text-white py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Liyah Beauty Salon. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="/" className="hover:underline">Instagram</a>
          <a href="/" className="hover:underline">Facebook</a>
          <a href="#contact" className="hover:underline">Contact Us</a>
        </div>
      </footer>
  );
};

export default Footer;
