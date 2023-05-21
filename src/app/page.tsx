'use client';
import Link from 'next/link';
import { useState } from 'react';

const Home = () => {
  const title = 'lucas';

  const [map, setMap] = useState(null);

  return (
    <>
      <Link href={`/map/${title}`}>link</Link>      
    </>
  );
};

export default Home;
