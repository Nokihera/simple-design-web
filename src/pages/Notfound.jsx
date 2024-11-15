import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-gray-700 mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! Page not found.</p>
      <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <Link 
        to="/" 
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
