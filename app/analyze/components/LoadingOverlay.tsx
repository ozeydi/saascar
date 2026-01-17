interface LoadingOverlayProps {
  loading: boolean;
}

export default function LoadingOverlay({ loading }: LoadingOverlayProps) {
  if (!loading) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 backdrop-blur-sm'>
      <div className='text-center'>
        <div className='relative w-24 h-12 mx-auto mb-4'>
          <svg
            className='w-12 h-12 animate-bounce-horizontal'
            viewBox='0 0 64 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect x='4' y='12' width='48' height='16' rx='4' fill='#3B82F6' />
            <rect x='14' y='4' width='28' height='14' rx='3' fill='#3B82F6' />
            <rect x='18' y='6' width='10' height='8' rx='1' fill='#BFDBFE' />
            <rect x='30' y='6' width='10' height='8' rx='1' fill='#BFDBFE' />
            <circle cx='14' cy='30' r='6' fill='#1F2937' />
            <circle cx='14' cy='30' r='3' fill='#6B7280' />
            <circle cx='42' cy='30' r='6' fill='#1F2937' />
            <circle cx='42' cy='30' r='3' fill='#6B7280' />
            <rect x='48' y='16' width='8' height='4' rx='1' fill='#FCD34D' />
            <rect x='0' y='16' width='6' height='3' rx='1' fill='#EF4444' />
          </svg>
        </div>
        <p className='text-lg font-medium text-white'>
          Analyzing your vehicle...
        </p>
      </div>
    </div>
  );
}
