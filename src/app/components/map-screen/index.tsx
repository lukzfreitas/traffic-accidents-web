import HeatMap from '@/app/components/google-maps/heat-map';
import Map from '@/app/components/google-maps/map';
import { useEffect } from 'react';
import { useMap } from './useState';

const MapScreen = () => {
  const { accidents } = useMap({
    startDate: new Date(2013, 0, 1),
    endDate: new Date(2013, 11, 31),
    skip: 0,
    take: 200,
  });  

  return accidents.length > 0 ? (
    <div>
      <Map>
        <HeatMap data={accidents.map((item) => item.getLatLng())} />
      </Map>
    </div>
  ) : (
    <p>Carregando</p>
  );
};

export default MapScreen;
