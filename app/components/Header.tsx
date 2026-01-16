import Link from 'next/link';

export default function Header() {
  return (
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
              className='text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors'
              data-testid='link-nav-analyze'
            >
              Analyze
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
