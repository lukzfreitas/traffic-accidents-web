import { gql } from '@apollo/client';
import apolloClient from './apolloClient';

export const rangeDate = async (
  startDate: string,
  endDate: string,
  skip: number,
  take: number,
) => {

  const result = await apolloClient.query({
    query: gql`
      {
        accidents_range_date(
          args: {
            startDate: "${startDate}"
            endDate: "${endDate}"
            skip: ${skip}
            take: ${take}
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
  return result.data.accidents_range_date;
};
