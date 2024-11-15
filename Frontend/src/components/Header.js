import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/campaigns" className="hover:underline">
              Campaigns
            </Link>
          </li>
          <li>
            <Link to="/audience" className="hover:underline">
              Audience
            </Link>
          </li>
          <li>
            <Link to="/send-message" className="hover:underline">
              Send Message
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
