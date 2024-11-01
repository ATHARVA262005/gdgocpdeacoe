import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
const logo = "https://seeklogo.com/images/G/google-developers-logo-F8BF3155AC-seeklogo.com.png";


const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap gap-8 justify-between">
          {/* First Column: Logo */}
          <div className="flex-1">
            <img src={logo}  alt="Logo" className="w-32 mb-4 drop-shadow-lg" />
            <p className="text-gray-200">Connecting People , Building Communities</p>
          </div>

          {/* Second Column: Quick Links */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-200">About GDG</Link></li>
              <li><Link to="/about" className="hover:text-gray-200">Upcoming Events</Link></li>
              <li><Link to="/services" className="hover:text-gray-200">Participation Terms</Link></li>
              <li><Link to="/portfolio" className="hover:text-gray-200">Privacy</Link></li>
              <li><Link to="/blog" className="hover:text-gray-200">Terms</Link></li>
              <li><Link to="/contact" className="hover:text-gray-200">Organizer Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Third Column: Social Links */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                <FaLinkedinIn className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
