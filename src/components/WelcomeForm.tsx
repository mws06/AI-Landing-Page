import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Bot } from 'lucide-react';
import { supabase } from '../lib/supabase';

const niches = [
  'E-commerce', 'Healthcare', 'Real Estate', 'Financial Services',
  'Education', 'Manufacturing', 'Technology', 'Professional Services',
  'Retail', 'Hospitality', 'Marketing Agency', 'Other'
];

export const WelcomeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    business_niche: '' 
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    
    try {
      const { error: supabaseError } = await supabase
        .from('leads')
        .insert([{
          name: formData.name,
          email: formData.email,
          business_niche: formData.business_niche
        }]);

      if (supabaseError) throw supabaseError;

      // Store in localStorage for use in assessment
      localStorage.setItem('userData', JSON.stringify(formData));
      navigate('/assessment');
    } catch (err) {
      console.error('Submission error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-purple-900">
      <div className="max-w-md w-full mx-auto px-4 mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
              Discover Your AI Potential
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Start your AI journey today
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="business_niche" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Business Niche
              </label>
              <select
                id="business_niche"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={formData.business_niche}
                onChange={(e) => setFormData({ ...formData, business_niche: e.target.value })}
              >
                <option value="">Select your business niche</option>
                {niches.map((niche) => (
                  <option key={niche} value={niche}>{niche}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity font-medium disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Start Assessment'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};