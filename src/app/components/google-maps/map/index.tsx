'use client';
import { useCallback, useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

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
  zoom = 12,
  width = '1200px',
  height = '400px',
  mapReady = () => {},
  ...props
}: Props) => {
  const googleMapsApiKey: string = process.env.GOOGLE_MAPS_API as string;

  const [map, setMap]: [any, Function] = useState(null);
  const [libraries, setLibraries]: [any, Function] = useState([
    'visualization',
  ]);
  const [center, setCenter]: [any, Function] = useState(
    props.center || { lat: -29.999609, lng: -51.090921 }
  );

  useEffect(() => {
    setCenter(center)
  }, [center])

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      setMap(map);
      mapReady(map);
    },
    [mapReady],
  );

  const onUnmount = useCallback((_: any) => {
    setMap(null);
  }, []);
  

  return (
    <LoadScript
      googleMapsApiKey={googleMapsApiKey}
      libraries={libraries}
      id={id}
    >
      <GoogleMap
        mapContainerStyle={{ height, width }}        
        zoom={zoom}
        center={center}        
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {props.children}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
