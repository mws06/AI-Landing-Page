import React, { useState, useEffect } from 'react';
import { Bot, Phone, Calendar, Workflow, Zap, TrendingUp } from 'lucide-react';
import { ValueSection } from './ValueSection';

export const AssessmentTool = () => {
  const [showModal, setShowModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [values, setValues] = useState({
    customerService: 0,
    virtualReceptionist: 0,
    appointmentSetter: 0,
    onboarding: 0,
    workflow: 0
  });

  const sections = [
    {
      title: 'Customer Service AI Agent',
      icon: Bot,
      question: 'How many customer service inquiries do you handle monthly?',
      calculation: (value: number) => value * 25 * 12, // $25 per inquiry saved annually
      unit: 'inquiries',
      valuePrefix: '$',
      description: 'Annual Cost Savings',
      sources: [
        {
          title: 'The AI Revolution In Customer Service',
          link: 'https://www.forbes.com/councils/forbesbusinesscouncil/2023/05/12/the-ai-revolution-in-customer-service-what-do-we-do-next/'
        },
        {
          title: 'AI And The Economy: Customer Service Jobs',
          link: 'https://www.forbes.com/sites/billconerly/2023/09/28/ai-and-the-economy-customer-service-jobs-will-be-cut-quality-improved/'
        }
      ]
    },
    {
      title: 'Virtual Receptionist',
      icon: Phone,
      question: 'How many hours per week do you spend on call handling?',
      calculation: (value: number) => value * 25 * 52, // $25 per hour saved annually
      unit: 'hours',
      valuePrefix: '$',
      description: 'Annual Cost Savings',
      sources: [
        {
          title: 'Customer Service: How AI Is Transforming Interactions',
          link: 'https://www.forbes.com/councils/forbesbusinesscouncil/2024/08/22/customer-service-how-ai-is-transforming-interactions/'
        },
        {
          title: 'More Than Chatbots: AI Trends Driving Conversational Experiences',
          link: 'https://www.forbes.com/councils/forbesbusinesscouncil/2024/03/15/more-than-chatbots-ai-trends-driving-conversational-experiences-for-customers/'
        }
      ]
    },
    {
      title: 'AI Appointment Setter',
      icon: Calendar,
      question: 'How many appointments do you schedule monthly?',
      calculation: (value: number) => value * 15 * 12, // $15 per appointment saved annually
      unit: 'appointments',
      valuePrefix: '$',
      description: 'Annual Cost Savings',
      sources: [
        {
          title: 'AI Reduces Energy Service Costs',
          link: 'https://www.forbes.com/sites/markledain/2024/10/16/ai-reduces-energy-service-costs-but-increases-demand-for-commodities/'
        },
        {
          title: 'Cutting Through The Noise To Get To The Reality Of Customer Service AI',
          link: 'https://www.forbes.com/sites/adrianswinscoe/2024/10/12/cutting-through-the-noise-to-get-to-the-reality-of-customer-service-ai/'
        }
      ]
    },
    {
      title: 'One-Click Onboarding',
      icon: Zap,
      question: 'How many new clients do you onboard monthly?',
      calculation: (value: number) => value * 100 * 12, // $100 per client saved annually
      unit: 'clients',
      valuePrefix: '$',
      description: 'Annual Cost Savings',
      sources: [
        {
          title: 'Customer Service: How AI Is Transforming Interactions',
          link: 'https://www.forbes.com/councils/forbesbusinesscouncil/2024/08/22/customer-service-how-ai-is-transforming-interactions/'
        },
        {
          title: 'More Than Chatbots: AI Trends Driving Conversational Experiences',
          link: 'https://www.forbes.com/councils/forbesbusinesscouncil/2024/03/15/more-than-chatbots-ai-trends-driving-conversational-experiences-for-customers/'
        }
      ]
    },
    {
      title: 'Workflow Automation',
      icon: Workflow,
      question: 'How many manual processes do you want to automate?',
      calculation: (value: number) => value * 200 * 12, // $200 per process saved annually
      unit: 'processes',
      valuePrefix: '$',
      description: 'Annual Cost Savings',
      sources: [
        {
          title: 'The AI Revolution In Customer Service',
          link: 'https://www.forbes.com/councils/forbesbusinesscouncil/2023/05/12/the-ai-revolution-in-customer-service-what-do-we-do-next/'
        },
        {
          title: 'Customer Service: How AI Is Transforming Interactions',
          link: 'https://www.forbes.com/councils/forbesbusinesscouncil/2024/08/22/customer-service-how-ai-is-transforming-interactions/'
        }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateTotalSavings = () => {
    return Object.values(values).reduce((total, value, index) => 
      total + sections[index].calculation(value), 0
    );
  };

  const handleValueChange = (key: keyof typeof values, value: number) => {
    setValues(prev => ({ ...prev, [key]: value }));
  };

  const totalSavings = calculateTotalSavings();

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-purple-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent [text-shadow:0_0_30px_rgba(139,92,246,0.3)]">
          AI Value Assessment
        </h1>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <ValueSection 
              key={index} 
              {...section} 
              onValueChange={(value) => handleValueChange(
                Object.keys(values)[index] as keyof typeof values,
                value
              )}
            />
          ))}
        </div>

        {/* Floating Total Savings Container */}
        <div className={`fixed bottom-4 right-4 left-4 md:left-auto md:right-8 md:w-80 z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 border-2 border-purple-500/20 backdrop-blur-lg bg-opacity-95 dark:bg-opacity-95">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-300" />
              </div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Total Savings
              </h2>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 rounded-lg p-4">
              <p className="text-3xl font-bold text-purple-900 dark:text-purple-100 animate-pulse [text-shadow:0_0_30px_rgba(139,92,246,0.5)]">
                ${totalSavings.toLocaleString()}
              </p>
              <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">
                Estimated Annual Cost Savings
              </p>
            </div>
          </div>
        </div>

        {/* Static Total Savings Container */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 transform hover:scale-[1.02] transition-all border-2 border-purple-500/20">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <TrendingUp className="h-8 w-8 text-purple-600 dark:text-purple-300" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Total Annual Cost Savings
            </h2>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 rounded-lg p-6 shadow-inner">
            <p className="text-4xl font-bold text-purple-900 dark:text-purple-100 animate-pulse [text-shadow:0_0_30px_rgba(139,92,246,0.5)]">
              ${totalSavings.toLocaleString()}
            </p>
            <p className="text-purple-700 dark:text-purple-300 text-lg mt-2">
              Estimated Annual Cost Savings
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://calendly.com/tanmaygunwant/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Book a FREE AI Audit
          </a>
        </div>
      </div>
    </div>
  );
};