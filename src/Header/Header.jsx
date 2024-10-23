import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black h-24 sm:h-20 md:h-24 flex items-center justify-between px-4 relative">
      <div className="text-white text-2xl font-bold">Logo</div>
      
      {/* Navigation Menu */}
      <nav
        className={`absolute top-24 left-0 w-full bg-black sm:static sm:flex z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'block' : 'hidden'
        } sm:block`}
      >
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-16 lg:gap-20 items-center bg-black">
          <li>
            <Link
              to="/"
              className="text-white text-lg sm:text-xl md:text-2xl font-semibold hover:text-black hover:bg-white hover:border-2 hover:border-black hover:rounded-lg hover:px-2 hover:py-1 transition-all"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white text-lg sm:text-xl md:text-2xl font-semibold hover:text-black hover:bg-white hover:border-2 hover:border-black hover:rounded-lg hover:px-2 hover:py-1 transition-all"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              className="text-white text-lg sm:text-xl md:text-2xl font-semibold hover:text-black hover:bg-white hover:border-2 hover:border-black hover:rounded-lg hover:px-2 hover:py-1 transition-all"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white text-lg sm:text-xl md:text-2xl font-semibold hover:text-black hover:bg-white hover:border-2 hover:border-black hover:rounded-lg hover:px-2 hover:py-1 transition-all"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Menu Button for small screens */}
      <button
        onClick={toggleMenu}
        className="text-white sm:hidden text-3xl focus:outline-none z-50"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  );
};

export default Header;
