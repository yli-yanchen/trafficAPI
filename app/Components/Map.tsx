'use client';

import { useEffect, useRef } from 'react';
import tt, { Map as TomTomMap } from '@tomtom-international/web-sdk-maps';

interface MapProps {
  apiKey: string;
  center?: [number, number];
  zoom?: number;
}

const Map: React.FC<MapProps> = ({
  apiKey,
  center = [-122.4194, 37.7749],
  zoom = 10,
}) => {
  const mapElement = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<TomTomMap | null>(null);

  useEffect(() => {
    if (mapElement.current && !mapInstance.current) {
      mapInstance.current = tt.map({
        key: apiKey,
        container: mapElement.current,
        style: 'tomtom://vector/1/basic-main',
        center,
        zoom,
      });
    }

    return () => {
      mapInstance.current?.remove();
    };
  }, [apiKey, center, zoom]);

  return <div ref={mapElement} style={{ width: '100%', height: '100vh' }} />;
};

export default Map;
