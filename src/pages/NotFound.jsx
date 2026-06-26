// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FF] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#1B2E6E] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="bg-[#CC1F1F] text-white px-6 py-3 rounded-md hover:bg-[#1B2E6E] transition-colors inline-block"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;