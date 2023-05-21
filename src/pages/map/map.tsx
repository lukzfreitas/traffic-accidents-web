import HeatMap from '@/app/components/google-maps/heat-map';
import Map from '@/app/components/google-maps/map';
import Accident from '@/app/models/accident';
import { useState } from 'react';

const MapScreen = (accidentsProp: any[], title: string) => {
  const [accidents, setAccidents]: [Accident[], Function] = useState(
    accidentsProp.map((item) => new Accident(item)),
  );
  const [map, setMap] = useState(null);

  return (
    <div>
      <h1>{title}</h1>
      <Map
        center={accidents[0].getLatLng().serialize()}
        mapReady={(map: any) => setMap(map)}
      >
        <HeatMap data={accidents.map(item => item.getLatLng())}/>
      </Map>
    </div>
  );
};

export default MapScreen;
