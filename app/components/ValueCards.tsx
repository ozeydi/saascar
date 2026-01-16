import Card from './Card';

interface CardData {
  number: number;
  title: string;
  description: string;
}

export default function ValueCards() {
  const cards: CardData[] = [
    {
      number: 1,
      title: 'Price Check',
      description:
        'Compare the asking price against market data for the specific model, year, and mileage.',
    },
    {
      number: 2,
      title: 'Mechanical Risks',
      description:
        'Discover known issues and common failures for the exact engine and model variant.',
    },
    {
      number: 3,
      title: 'Expert Advice',
      description:
        'Get a personalized checklist of things to inspect before committing to the purchase.',
    },
  ];

  return (
    <section className='bg-gray-50 border-t border-gray-200'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20'>
        <div className='text-center mb-12'>
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-900'>
            What You Get
          </h2>
          <p className='mt-3 text-base text-gray-600'>
            Everything you need to make an informed decision.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8'>
          {cards.map((card) => (
            <Card key={card.number} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
