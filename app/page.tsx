import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ValueCards from '@/components/ValueCards';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <Header />
      <main className='flex-1'>
        <section className='bg-white'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
              <div className='text-center lg:text-left'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight'>
                  Analyze Any Car Offer Before You Buy
                </h1>
                <p className='mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed'>
                  Paste a car listing link and get instant buying advice.
                  Understand the real value, spot potential issues, and know
                  exactly what to check.
                </p>
                <div className='mt-8 sm:mt-10'>
                  <Link
                    href='/analyze'
                    className='inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-700 transition-colors'
                    data-testid='button-analyze-cta'
                  >
                    Analyze an Offer
                  </Link>
                </div>
              </div>
              <div className='flex justify-center lg:justify-end order-first lg:order-last'>
                <div className='relative w-full max-w-md aspect-square bg-gray-100 rounded-2xl flex items-center justify-center'>
                  <div className='flex justify-center'>
                    {' '}
                    <Image
                      src='/analysis-illustration.svg'
                      alt='Car analysis illustration'
                      width={420}
                      height={320}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ValueCards />
      </main>
      <Footer />
    </div>
  );
}
