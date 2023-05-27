import { gql } from '@apollo/client';
import apolloClient from './apolloClient';
import Accident from '../models/accident';

export const rangeDate = async (
  startDate: Date,
  endDate: Date,
  skip: number,
  take: number,
): Promise<Accident[]> => {
  const response = await apolloClient.query({
    query: gql`
      {
        accidents_range_date(
          args: {
            startDate: "2013-01-01T00:00:00"
            endDate: "2013-06-31T00:00:00"
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
  return response.data.accidents_range_date.map((item: any) => new Accident(item));
};
