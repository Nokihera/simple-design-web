import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full mt-auto text-gray-700 border-t-2 border-[#31241e] py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} BORCELE. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/about" className="hover:text-gray-500 transition">About</Link>
          <Link to="/privacy" className="hover:text-gray-500 transition">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-gray-500 transition">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
