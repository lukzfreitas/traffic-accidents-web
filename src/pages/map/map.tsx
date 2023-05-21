import HeatMap from '@/app/components/google-maps/heat-map';
import Map from '@/app/components/google-maps/map';
import Accident from '@/app/models/accident';
import { useEffect, useState } from 'react';

const MapScreen = (accidentsProp: any[] = [], title: string = '') => {
  const [accidents, setAccidents]: [Accident[], Function] = useState([]);

  useEffect(() => {    
    setAccidents(accidentsProp.map((item) => new Accident(item)));    
  }, [accidentsProp]);

  return accidents.length > 0 ? (
    <div>
      <h1>{title}</h1>
      <Map center={accidents[0].getLatLng().serialize()}>
        <HeatMap data={accidents.map((item) => item.getLatLng())} />
      </Map>
    </div>
  ) : (
    <p>Carregando</p>
  );
};

export default MapScreen;
