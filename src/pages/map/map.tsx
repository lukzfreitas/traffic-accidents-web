import HeatMap from '@/app/components/google-maps/heat-map';
import Map from '@/app/components/google-maps/map';
import Accident from '@/app/models/accident';
import { useEffect, useState } from 'react';

const MapScreen = (accidentsProp: any[] = [], title: string = '') => {
  const [accidents, setAccidents]: [Accident[], Function] = useState([]);
  const [accidentsFiltered, setAccidentsFiltered]: [Accident[], Function] =
    useState([]);
  const [date, setDate]: [Date, Function] = useState(new Date(2013, 0, 1, 0));

  const handleAccidents = () => {
    const endDate = new Date(2013, 11, 31, 0);
    if (date < endDate) {
      const newDate = new Date(date)
      newDate.setDate(newDate.getDate() + 1);
      const result = accidents.filter((item) => item.getDatetime() <= newDate);
      if (result.length > 0) {
        setAccidentsFiltered(result);
      }      
      setDate(newDate);      
    }
  };

  useEffect(() => {
    setAccidents(accidentsProp.map((item) => new Accident(item)));
  }, [accidentsProp]);

  useEffect(() => {
    const timerId = setInterval(handleAccidents, 1000);
    return () => clearTimeout(timerId);
  });

  return accidents.length > 0 ? (
    <div>
      <h1>{title}</h1>
      <Map>
        <HeatMap data={accidentsFiltered.map((item) => item.getLatLng())} />
      </Map>
    </div>
  ) : (
    <p>Carregando</p>
  );
};

export default MapScreen;
