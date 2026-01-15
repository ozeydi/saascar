import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
