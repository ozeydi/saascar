export default function Footer() {
  return (
    <footer className='bg-gray-100 py-6 text-center text-sm text-gray-500'>
      <p>© {new Date().getFullYear()} SaasCar</p>
      <p className='mt-1'>
        Advisory tool only — always inspect vehicles professionally.
      </p>
    </footer>
  );
}
