'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  DollarSign,
  AlertTriangle,
  ClipboardCheck,
  ArrowLeft,
  Car,
} from 'lucide-react';
import { AnalysisResult } from '@/types/analysis';

import LoadingOverlay from '@/app/analyze/components/LoadingOverlay';

export default function AnalyzeResults({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedAnalysis = sessionStorage.getItem('analysisResult');

    if (!storedAnalysis) {
      router.push('/analyze');
      return;
    }

    // small delay for UX
    setTimeout(() => {
      setAnalysis(JSON.parse(storedAnalysis));
      setLoading(false);
    }, 800);
  }, [router]);

  if (loading || !analysis) {
    return <LoadingOverlay loading />;
  }

  const { vehicle, priceCheck, mechanicalRisks, expertAdvice } = analysis;

  const formattedMileage = Number(vehicle.mileage).toLocaleString();
  const formattedPrice = Number(vehicle.price).toLocaleString();

  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <header className='bg-white border-b border-gray-200'>
        <div className='max-w-6xl mx-auto px-4 h-16 flex items-center justify-between'>
          <Link href='/' className='text-xl font-bold text-gray-900'>
            SaasCar
          </Link>
          <Link
            href='/analyze'
            className='text-sm font-medium text-gray-600 hover:text-gray-900'
          >
            New Analysis
          </Link>
        </div>
      </header>

      <main className='flex-1 py-8 px-4'>
        <div className='max-w-4xl mx-auto'>
          <Link
            href='/analyze/details'
            className='inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6'
          >
            <ArrowLeft className='w-4 h-4 mr-1' />
            Back to Details
          </Link>

          <div className='text-center mb-8'>
            <h1 className='text-3xl font-bold text-gray-900'>
              Analysis Complete
            </h1>
            <p className='mt-2 text-gray-600'>
              Here&apos;s what we found about this vehicle
            </p>
          </div>

          {/* Vehicle card */}
          <div className='bg-white rounded-xl border p-6 mb-6'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
                <Car className='w-5 h-5 text-blue-600' />
              </div>
              <div>
                <h2 className='text-lg font-semibold'>
                  {vehicle.year} {vehicle.make} {vehicle.model}
                </h2>
                <p className='text-sm text-gray-500'>
                  {vehicle.engine} · {vehicle.fuelType}
                </p>
              </div>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t'>
              <Info label='Mileage' value={`${formattedMileage} km`} />
              <Info label='Price' value={`$${formattedPrice}`} />
              <Info
                label='Location'
                value={`${vehicle.city ? vehicle.city + ', ' : ''}${vehicle.country}`}
              />
              <Info label='Fuel' value={vehicle.fuelType} />
            </div>
          </div>

          {/* Price check */}
          <Section
            icon={<DollarSign className='w-5 h-5 text-green-600' />}
            title='Price Check'
          >
            {priceCheck}
          </Section>

          {/* Risks */}
          <ListSection
            icon={<AlertTriangle className='w-5 h-5 text-amber-600' />}
            title='Mechanical Risks'
            items={mechanicalRisks}
          />

          {/* Advice */}
          <ListSection
            icon={<ClipboardCheck className='w-5 h-5 text-blue-600' />}
            title='Expert Advice'
            items={expertAdvice}
          />

          <div className='mt-10 text-center'>
            <Link
              href='/analyze'
              className='inline-flex bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700'
            >
              Analyze Another Vehicle
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className='text-xs text-gray-500 uppercase'>{label}</p>
      <p className='text-sm font-medium'>{value}</p>
    </div>
  );
}

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className='bg-white rounded-xl border p-6 mb-6'>
      <div className='flex items-center gap-3 mb-4'>
        <div className='w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center'>
          {icon}
        </div>
        <h3 className='text-lg font-semibold'>{title}</h3>
      </div>
      <p className='text-gray-700'>{children}</p>
    </div>
  );
}

function ListSection({
  title,
  icon,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
}) {
  return (
    <div className='bg-white rounded-xl border p-6 mb-6'>
      <div className='flex items-center gap-3 mb-4'>
        <div className='w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center'>
          {icon}
        </div>
        <h3 className='text-lg font-semibold'>{title}</h3>
      </div>
      <ul className='space-y-3'>
        {items.map((item, i) => (
          <li key={i} className='flex gap-3'>
            <span className='text-sm font-medium text-gray-400'>{i + 1}.</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
