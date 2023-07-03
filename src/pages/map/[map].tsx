import { GetServerSideProps } from 'next';
import MapPage from './map';
import { rangeDate } from '@/app/utils/api';
import DateCustom from '@/app/models/date';

const MapPageProps: any = (props: {
  data: any;
  startDate: string;
  endDate: string;
}) => MapPage(props);

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const startDate = new DateCustom({date: context.query.startDate});
  const endDate = new DateCustom({date: context.query.endDate});
  const data: any = await rangeDate(
    startDate.toString(),
    endDate.toString(),
    0,
    200,
  );

  if (data) {
    return {
      props: {
        data,
        startDate: startDate.toString(),
        endDate: endDate.toString(),
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
