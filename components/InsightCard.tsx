import React from 'react';
import type { Insight } from '../types';

interface InsightCardProps {
  insight: Insight;
}

// FIX: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
const iconMap: { [key in NonNullable<Insight['icon']>]: React.ReactElement } = {
  trend: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  impact: (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
     </svg>
  ),
  policy: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0v-4m0 4h5m0 0v-4m0 4H3m3-4h5m0 0H3m2-4h5m0 0H3" />
    </svg>
  ),
  recession: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5-5-5M17 8l-5 5-5-5" />
    </svg>
  ),
  growth: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5 5 5M7 16l5-5 5 5" />
    </svg>
  ),
  inflation: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-3.333 0-5 2-5 4s1.667 4 5 4 5-2 5-4-1.667-4-5-4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h.01M20 12h.01M12 4v.01M12 20v.01" />
    </svg>
  ),
  seasonal: (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M5 19v-5h5m10-4v5h-5M19 5v5h-5" />
    </svg>
  )
};


const InsightCard: React.FC<InsightCardProps> = ({ insight }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col h-full transition-colors duration-300">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          {insight.icon && iconMap[insight.icon]}
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">{insight.title}</h3>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mt-3 flex-grow">{insight.text}</p>
    </div>
  );
};

export default InsightCard;