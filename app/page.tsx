'use client';

// pages/map.tsx
import dynamic from 'next/dynamic';
import { NextPage } from 'next';

const Map = dynamic(() => import('./Components/Map'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const MapPage: NextPage = () => {
  const apiKey =
    process.env.NEXT_PUBLIC_TOMTOM_API_KEY || 'API_KEY_NOT_PROVIDED';
  console.log('TOMTOM API Key:', apiKey);

  return (
    <div>
      <h1>My Vector Map</h1>
      <Map apiKey={apiKey} center={[-122.4194, 37.7749]} zoom={10} />
    </div>
  );
};

export default MapPage;
