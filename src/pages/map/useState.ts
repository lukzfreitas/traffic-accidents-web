import DateCustom from '@/app/models/date';
import Info from '@/app/models/info';
import { useEffect, useState } from 'react';

interface Props {
  data: any[];
  startDate: string;
  endDate: string;
}

const useMap = (props: Props) => {
  const [data, setData]: [Info[], Function] = useState([]);
  const [startDate, setStartDate]: [DateCustom, Function] = useState(new DateCustom({date: props.startDate}));
  const [endDate, setEndDate]: [DateCustom, Function] = useState(new DateCustom({date: props.endDate}));

  useEffect(() => {    
    setData(props.data.map((item) => new Info(item)));
  }, [props.data]);

  return { data, startDate, endDate };
};

export default useMap;
