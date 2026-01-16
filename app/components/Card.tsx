interface CardProps {
  number: string | number;
  title: string;
  description: string;
}

export default function Card({ number, title, description }: CardProps) {
  return (
    <div className='bg-white rounded-xl p-6 sm:p-8 border border-gray-200'>
      <div className='w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4'>
        <span className='text-blue-600 font-bold text-lg'>{number}</span>
      </div>
      <h3 className='text-lg font-semibold text-gray-900'>{title}</h3>
      <p className='mt-2 text-sm text-gray-600 leading-relaxed'>
        {description}
      </p>
    </div>
  );
}
