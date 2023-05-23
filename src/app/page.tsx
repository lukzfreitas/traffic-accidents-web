'use client';
import Link from 'next/link';

const Home = () => {
  const title = 'Mapa config';  

  return (
    <>
      <Link href={`/map/${title}`}>link</Link>      
    </>
  );
};

export default Home;
