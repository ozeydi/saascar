'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AnalyzeFooter from '../components/AnalyzeFooter';

export default function AnalyzeDetails() {
  const router = useRouter();

  const [form, setForm] = useState({
    make: '',
    model: '',
    year: '',
    engine: '',
    fuelType: '',
    mileage: '',
    price: '',
    country: '',
    city: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/analyze/results');
  };

  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <header className='bg-white border-b border-gray-200'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <Link href='/' className='text-xl font-bold text-gray-900'>
              SaasCar
            </Link>
            <nav>
              <Link
                href='/analyze'
                className='text-sm font-medium text-gray-600 hover:text-gray-900'
              >
                Analyze
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className='flex-1 py-12 px-4'>
        <div className='max-w-lg mx-auto'>
          <div className='text-center mb-8'>
            <h1 className='text-2xl sm:text-3xl font-bold text-gray-900'>
              Confirm Vehicle Details
            </h1>
            <p className='mt-2 text-base text-gray-600'>
              Verify the information below before analysis.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className='space-y-6 bg-white p-6 rounded-xl border border-gray-200'
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label
                  htmlFor='make'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Make
                </label>
                <input
                  type='text'
                  id='make'
                  name='make'
                  value={form.make}
                  onChange={handleChange}
                  placeholder='e.g. Toyota'
                  className='w-full px-4 py-2.5 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  required
                  data-testid='input-make'
                />
              </div>
              <div>
                <label
                  htmlFor='model'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Model
                </label>
                <input
                  type='text'
                  id='model'
                  name='model'
                  value={form.model}
                  onChange={handleChange}
                  placeholder='e.g. Camry'
                  className='w-full px-4 py-2.5 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  required
                  data-testid='input-model'
                />
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label
                  htmlFor='year'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Year
                </label>
                <input
                  type='number'
                  id='year'
                  name='year'
                  value={form.year}
                  onChange={handleChange}
                  placeholder='e.g. 2020'
                  className='w-full px-4 py-2.5 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  required
                  data-testid='input-year'
                />
              </div>
              <div>
                <label
                  htmlFor='engine'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Engine
                </label>
                <input
                  type='text'
                  id='engine'
                  name='engine'
                  value={form.engine}
                  onChange={handleChange}
                  placeholder='e.g. 2.5L 4-cyl'
                  className='w-full px-4 py-2.5 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  required
                  data-testid='input-engine'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='fuelType'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Fuel Type
              </label>
              <select
                id='fuelType'
                name='fuelType'
                value={form.fuelType}
                onChange={handleChange}
                className='w-full px-4 py-2.5 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white'
                required
                data-testid='select-fuel-type'
              >
                <option value=''>Select fuel type</option>
                <option value='gasoline'>Gasoline</option>
                <option value='diesel'>Diesel</option>
                <option value='hybrid'>Hybrid</option>
                <option value='electric'>Electric</option>
                <option value='plugin-hybrid'>Plug-in Hybrid</option>
                <option value='lpg'>LPG</option>
              </select>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label
                  htmlFor='mileage'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Mileage
                </label>
                <input
                  type='number'
                  id='mileage'
                  name='mileage'
                  value={form.mileage}
                  onChange={handleChange}
                  placeholder='e.g. 50000'
                  className='w-full px-4 py-2.5 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  required
                  data-testid='input-mileage'
                />
              </div>
              <div>
                <label
                  htmlFor='price'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Price
                </label>
                <input
                  type='number'
                  id='price'
                  name='price'
                  value={form.price}
                  onChange={handleChange}
                  placeholder='e.g. 25000'
                  className='w-full px-4 py-2.5 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  required
                  data-testid='input-price'
                />
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label
                  htmlFor='country'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Country <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  id='country'
                  name='country'
                  value={form.country}
                  onChange={handleChange}
                  placeholder='e.g. United States'
                  className='w-full px-4 py-2.5 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  required
                  data-testid='input-country'
                />
              </div>
              <div>
                <label
                  htmlFor='city'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  City <span className='text-gray-400'>(optional)</span>
                </label>
                <input
                  type='text'
                  id='city'
                  name='city'
                  value={form.city}
                  onChange={handleChange}
                  placeholder='e.g. Los Angeles'
                  className='w-full px-4 py-2.5 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  data-testid='input-city'
                />
              </div>
            </div>

            <button
              type='submit'
              className='w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors'
              data-testid='button-submit'
            >
              Analyze This Vehicle
            </button>
          </form>
        </div>
      </main>

      <AnalyzeFooter />
    </div>
  );
}
