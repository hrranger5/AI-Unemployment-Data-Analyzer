import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">Analyzing data, please wait...</p>
      <p className="mt-2 text-gray-500 dark:text-gray-400">This might take a moment.</p>
    </div>
  );
};

export default Loader;