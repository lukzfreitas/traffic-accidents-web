import { GetServerSideProps } from 'next';
import MapPage from './map';
import { rangeDate } from '@/app/utils/api';
import nookies from 'nookies';

const MapPageProps: any = (props: {
  data: any;
  startDate: string;
  endDate: string;
}) => MapPage(props);

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const cookies = nookies.get(context);
  const data: any = await rangeDate(cookies.startDate, cookies.endDate, 0, 200);

  if (data) {
    return {
      props: {
        data,
        startDate: cookies.startDate,
        endDate: cookies.endDate,
      },
    };
  }
  return {
    props: {
      data: {},
      startDate: '',
      endDate: '',
    },
  };
};

export default MapPageProps;
