import Accident from '@/app/models/accident';
import { rangeDate } from '@/app/utils/accidentApi';
import { useEffect, useState } from 'react';

interface Props {
  startDate: Date;
  endDate: Date;
  skip: number;
  take: number;
}

export const useMap = (props: Props) => {
  const [accidentsData, setAccidentsData]: [Accident[], Function] = useState(
    [],
  );
  const [accidents, setAccidents]: [Accident[], Function] = useState([]);
  const [loading, setLoading]: [boolean, Function] = useState(false);
  const [date, setDate]: [Date, Function] = useState(props.startDate);
  const [endDate, setEndDate]: [Date, Function] = useState(props.endDate);
  const [skip, setSkip]: [number, Function] = useState(props.skip);
  const [take, setTake]: [number, Function] = useState(props.take);

  useEffect(() => {    
    getRangeDateAccidents();
  }, []);

  const getRangeDateAccidents = async () => {
    setLoading(true);
    const result = await rangeDate(date, endDate, skip, take);
    setAccidents(
      result.sort(
        (a, b) => a.getDatetime().getDate() - b.getDatetime().getDate(),
      ),
    );
    setLoading(false);
    // handleAccidents()
  };

  const handleAccidents = () => {
    while (date < endDate) {
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() + 1);
      let result = accidentsData.filter(
        (item) => item.getDatetime() <= newDate,
      );
      if (result.length > 0) {
        setAccidents(result);
      }
      setDate(newDate);
    }
  };

  return { accidents, loading };
};
