import apolloClient from '@/app/utils/apolloClient';
import { gql } from '@apollo/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import MapScreen from './map';

const MapPage: any = ({ accidents, title }: any) => MapScreen(accidents, title);

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { data } = await apolloClient.query({
    query: gql`
      {
        accidents_range_date(
          args: {
            startDate: "2013-01-01T00:00:00"
            endDate: "2013-02-31T00:00:00"
          }
        ) {
          DATA_HORA
          TEMPO
          REGIAO
          LATITUDE
          LONGITUDE
        }
      }
    `,
  });
  if (data) {
    return {
      props: {
        accidents: data.accidents_range_date,
        title: params.map,
      },
    };
  }
  return {
    props: {
      accidents: {},
      title: '',
    },
  };
};

export default MapPage;
