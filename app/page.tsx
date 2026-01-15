import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50'>
      <h1 className='text-3xl font-bold text-gray-900 mb-4'>SaasCar</h1>
      <p className='text-gray-600 mb-6 text-center'>
        Paste a car listing link and get instant buying advice.
      </p>
      <Link
        href='/analyze'
        className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'
      >
        Analyze an Offer
      </Link>
      <div className='mt-8 w-64 h-40 bg-gray-200 flex items-center justify-center rounded-xl'>
        <Image
          src='/placeholder.png'
          alt='Placeholder'
          width={200}
          height={120}
        />
      </div>
    </div>
  );
}
