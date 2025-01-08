import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface ValueSectionProps {
  title: string;
  icon: LucideIcon;
  question: string;
  calculation: (value: number) => number;
  unit: string;
  valuePrefix: string;
  description: string;
  sources: Array<{
    title: string;
    link: string;
  }>;
  onValueChange?: (value: number) => void;
}

export const ValueSection: React.FC<ValueSectionProps> = ({
  title,
  icon: Icon,
  question,
  calculation,
  unit,
  valuePrefix,
  description,
  sources,
  onValueChange
}) => {
  const [value, setValue] = useState<number>(0);
  const calculatedValue = calculation(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-[1.02] transition-transform">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
          <Icon className="h-6 w-6 text-purple-600 dark:text-purple-300" />
        </div>
        <h2 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          {title}
        </h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {question}
          </label>
          <input
            type="number"
            min="0"
            value={value || ''}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder={`Enter number of ${unit}`}
          />
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4">
          <p className="text-lg font-semibold text-purple-900 dark:text-purple-100 animate-pulse">
            {valuePrefix}{calculatedValue.toLocaleString()}
          </p>
          <p className="text-sm text-purple-700 dark:text-purple-300">{description}</p>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
          {sources.map((source, index) => (
            <p key={index} className="italic">
              Source {index + 1}: <a href={source.link} target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">{source.title}</a>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};