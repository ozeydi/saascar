import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Hero from '@/app/components/Hero';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
