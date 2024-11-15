import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">
          <Link to="/" className="hover:underline">
            Mini CRM
          </Link>
        </div>
        <ul className="flex space-x-6 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-300 transition duration-300 ease-in-out">
              Home
            </Link>
          </li>
          <li>
            <Link to="/campaigns" className="hover:text-blue-300 transition duration-300 ease-in-out">
              Campaigns
            </Link>
          </li>
          <li>
            <Link to="/audience" className="hover:text-blue-300 transition duration-300 ease-in-out">
              Audience
            </Link>
          </li>
          <li>
            <Link to="/send-message" className="hover:text-blue-300 transition duration-300 ease-in-out">
              Send Message
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-blue-300 transition duration-300 ease-in-out">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
