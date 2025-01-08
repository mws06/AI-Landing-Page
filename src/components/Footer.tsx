import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-purple-100 dark:border-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Mindwebsolutions.in. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};