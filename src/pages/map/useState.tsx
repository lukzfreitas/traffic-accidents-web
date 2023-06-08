import Accident from '@/app/models/accident';
import { rangeDate } from '@/app/utils/accidentApi';
import { useEffect, useState } from 'react';

interface Props {
  startDate: Date;
  endDate: Date;
}

export const useMap = (props: Props) => {
  const [accidentsData, setAccidentsData]: [Accident[], Function] = useState(
    [],
  );
  const [accidents, setAccidents]: [Accident[], Function] = useState([]);
  const [loading, setLoading]: [boolean, Function] = useState(false);
  const [date, setDate]: [Date, Function] = useState(props.startDate);
  const [endDate, setEndDate]: [Date, Function] = useState(props.endDate);

  useEffect(() => {
    getRangeDateAccidents();
  }, []);

  const getRangeDateAccidents = async () => {
    setLoading(true);
    const data = await rangeDate(date, endDate, 0, 100);
    setAccidents(
      data.sort(
        (a, b) => a.getDatetime().getDate() - b.getDatetime().getDate(),
      ),
    );
    setLoading(false);
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
