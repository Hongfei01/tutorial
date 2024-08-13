import Link from 'next/link';

function Navbar() {
  return (
    <nav className='max-w-3xl mx-auto py-4 flex gap-x-4 border-b-2'>
      <Link href={'/'}>Home</Link>
      <Link href={'/about'}>About</Link>
      <Link href={'/info'}>Info</Link>
      <Link href={'/count'}>Count</Link>
      <Link href={'/tour'}>Tour</Link>
    </nav>
  );
}
export default Navbar;
