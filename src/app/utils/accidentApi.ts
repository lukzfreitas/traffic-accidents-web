import { gql } from '@apollo/client';
import apolloClient from './apolloClient';
import Accident from '../models/accident';
import moment from 'moment';

export const rangeDate = async (
  startDate: Date,
  endDate: Date,
  skip: number,
  take: number,
): Promise<any[]> => {
  console.log(moment(startDate).format('YYYY-MM-DDTHH:mm:ss'));
  const response = await apolloClient.query({
    query: gql`
      {
        accidents_range_date(
          args: {
            startDate: "${moment(startDate).format('YYYY-MM-DDTHH:mm:ss')}"
            endDate: "${moment(endDate).format('YYYY-MM-DDTHH:mm:ss')}"
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
  const data: any[] = response.data.accidents_range_date;
  return data.map(item => new Accident(item));
};
