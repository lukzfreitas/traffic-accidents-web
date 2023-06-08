'use client';
import HeatMap from '@/app/components/google-maps/heat-map';
import Map from '@/app/components/google-maps/map';
import useMap from './useState';

const MapPage = () => {
  const { accidents, loading } = useMap({
    startDate: new Date(2013, 0, 1),
    endDate: new Date(2013, 6, 31),
  });
  
  return accidents.length > 0 ? (
    <Map>
      <HeatMap data={accidents.map(accident => accident.getLatLng())}></HeatMap>
    </Map>
  ): <p>loading...</p>;
};

export default MapPage;
