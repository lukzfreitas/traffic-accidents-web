import HeatMap from '@/app/components/google-maps/heat-map';
import Map from '@/app/components/google-maps/map';
import useMap from './useState';
import Head from 'next/head';

interface Props {
  data: any[];
  startDate: string;
  endDate: string;
}

const MapPage = (props: Props) => {
  const { data, startDate, endDate } = useMap({
    data: props.data,
    startDate: props.startDate,
    endDate: props.endDate,
  });

  return data.length > 0 ? (
    <div>
      <Head>
        <title>Mapa</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>{startDate.getFormat()}</p>
      <p>{endDate.getFormat()}</p>
      <Map center={data[0].getLatLng().serialize()}>
        <HeatMap data={data.map((item) => item.getLatLng())} />
      </Map>
    </div>
  ) : (
    <p>Carregando</p>
  );
};

export default MapPage;
