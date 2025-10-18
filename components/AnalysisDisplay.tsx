import React from 'react';
import type { AnalysisResult } from '../types';
import Chart from './Chart';
import InsightCard from './InsightCard';
import CodeBlock from './CodeBlock';

interface AnalysisDisplayProps {
  result: AnalysisResult;
  theme: 'light' | 'dark';
}

const AnalysisDisplay: React.FC<AnalysisDisplayProps> = ({ result, theme }) => {
  return (
    <div className="space-y-12">
      
      {/* Chart Section */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Unemployment Rate Over Time</h2>
        <div className="h-[28rem]">
          <Chart data={result.chartData} theme={theme} />
        </div>
      </section>

      {/* Insights Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Key Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {result.insights.map((insight, index) => (
            <InsightCard key={index} insight={insight} />
          ))}
        </div>
      </section>
      
      {/* Code Section */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300">
         <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Analysis Python Code</h2>
         <CodeBlock code={result.pythonCode} />
      </section>

    </div>
  );
};

export default AnalysisDisplay;