import DateCustom from '@/app/models/date';
import { useState } from 'react';

interface Props {
  date: DateCustom;
}

const useDatePicker = (props: Props) => {
  const [date, setDate] = useState(props.date);

  const onChangeDate = (value: Date) =>
    setDate(new DateCustom({ date: value }));

  return { onChangeDate, date };
};

export default useDatePicker;
