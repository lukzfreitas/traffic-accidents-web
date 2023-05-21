'use client';
import { useCallback, useState } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const id = 'google-map-script';

interface Props {
  center?: { lat: number; lng: number };
  zoom?: number;
  width?: string;
  height?: string;
  children?: any;
  mapReady?: Function;
}

const Map = ({
  center = { lat: -29.999609, lng: -51.090921 },
  zoom = 12,
  width = '1200px',
  height = '400px',
  mapReady = () => {},
  ..._
}: Props) => {
  const googleMapsApiKey: string = process.env.GOOGLE_MAPS_API as string;
  const { isLoaded } = useLoadScript({
    id,
    googleMapsApiKey,
    libraries: ['visualization']
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(
    (map: any) => {      
      map.setZoom(zoom);      
      mapReady(map);      
    },
    [zoom, mapReady],
  );

  const onUnmount = useCallback((_: any) => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ height, width }}
      center={center}      
      onLoad={onLoad}
      onUnmount={onUnmount}      
    >
      {_.children}
    </GoogleMap>
  ) : (
    <p>Carregando mapa</p>
  );
};

export default Map;
