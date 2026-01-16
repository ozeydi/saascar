'use client';

import { useState } from 'react';
import { Link, useLocation } from 'wouter';

export default function Analyze() {
  const [url, setUrl] = useState('');
  const [, setLocation] = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      setLocation('/analyze/details');
    }
  };

  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <header className='bg-white border-b border-gray-200'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <Link
              href='/'
              className='text-xl font-bold text-gray-900'
              data-testid='link-logo'
            >
              SaasCar
            </Link>
            <nav>
              <Link
                href='/analyze'
                className='text-sm font-medium text-blue-600'
                data-testid='link-nav-analyze'
              >
                Analyze
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className='flex-1 flex items-center justify-center px-4'>
        <div className='w-full max-w-lg'>
          <div className='text-center mb-8'>
            <h1 className='text-2xl sm:text-3xl font-bold text-gray-900'>
              Analyze a Car Listing
            </h1>
            <p className='mt-2 text-base text-gray-600'>
              Paste the URL of the car listing you want to analyze.
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <input
                type='url'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder='https://example.com/car-listing'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                required
                data-testid='input-url'
              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors'
              data-testid='button-submit'
            >
              Analyze This Offer
            </button>
          </form>
        </div>
      </main>

      <footer className='bg-white border-t border-gray-200'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <p className='text-center text-sm text-gray-500'>
            SaasCar provides general guidance only.
          </p>
        </div>
      </footer>
    </div>
  );
}
