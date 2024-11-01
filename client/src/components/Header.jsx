import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import '../assets/Header.css'; // Import the CSS file for custom styles

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky right-0 top-1 inset-x-0 z-50 w-46 md:w-1/2 mx-auto bg-blue-600/85 shadow-md rounded-full">
      <nav className="relative max-w-[66rem] w-full px-6 py-3 mx-auto flex items-center justify-between md:justify-center">
        <div className="md:hidden flex">
          {/* Mobile Menu Button aligned to the left */}
          <button onClick={toggleMenu} className="text-white focus:outline-none ">
            {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden text-white md:flex space-x-8 text-lg">
          <li>
            <Link to="/" className="nav-item">Home</Link>
          </li>
          <li>
            <Link to="/events" className="nav-item">Events</Link>
          </li>
          <li>
            <Link to="/team" className="nav-item">Team</Link>
          </li>
          <li>
            <Link to="/sponsors" className="nav-item">Sponsors</Link>
          </li>
          <li>
            <Link to="/certificates" className="nav-item">Certificates</Link>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div
          ref={mobileMenuRef}
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-blue-500 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
        >
          <ul className="flex flex-col mt-16 space-y-4 p-4">
            <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">Home</Link></li>
            <li><Link to="/events" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">Events</Link></li>
            <li><Link to="/team" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">Team</Link></li>
            <li><Link to="/sponsors" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">Sponsors</Link></li>
            <li><Link to="/certificates" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">Certificates</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
