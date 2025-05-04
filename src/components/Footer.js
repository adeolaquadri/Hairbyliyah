import React from "react";

const Footer = () => {
  return (
   <footer className="bg-rose-600 text-white py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Liyah's Beauty. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="https://www.instagram.com/hairbyliyah01?igsh=YTRocHRiMGRyZHRk" className="hover:underline">Instagram</a>
          <a href="https://www.facebook.com/" className="hover:underline">Facebook</a>
          <a href="https://www.tiktok.com/@_liyah05" className="hover:underline">TikTok</a>
          <a href="#contact" className="hover:underline">Contact Us</a>
        </div>
      </footer>
  );
};

export default Footer;
