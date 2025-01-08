import React from 'react';
import { Brain, TrendingUp, Rocket, Shield } from 'lucide-react';

const blogs = [
  {
    icon: Brain,
    title: "AI-Powered Customer Experience",
    description: "Transform customer interactions with 24/7 AI support. AI chatbots handle 80% of routine queries, reducing response time from hours to seconds."
  },
  {
    icon: TrendingUp,
    title: "Automation ROI Impact",
    description: "Maximize efficiency with AI automation. Businesses report 40-60% cost reduction in operational expenses through AI implementation."
  },
  {
    icon: Rocket,
    title: "AI Market Growth Trends",
    description: "The global AI market will reach $190.61B by 2025. Early adopters report 50% higher profit margins than industry averages."
  },
  {
    icon: Shield,
    title: "AI Security Enhancement",
    description: "AI-powered security systems detect threats 95% faster than traditional methods, reducing cyber incidents by 60%."
  }
];

export const BlogSection = () => {
  return (
    <div className="py-12 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent [text-shadow:0_0_30px_rgba(139,92,246,0.3)]">
          AI Growth Insights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog, index) => {
            const Icon = blog.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-[1.02] transition-all hover:shadow-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <Icon className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    {blog.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300">
                  {blog.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};