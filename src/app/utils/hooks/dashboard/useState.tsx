import DateCustom from '@/app/models/date';
import { useEffect, useState } from 'react';
import { setCookie } from 'nookies';

interface Return {
  title: string;
  titleInput: string;
  startDate: DateCustom;
  endDate: DateCustom;
  setTitle: (title: string) => void;
  onChangeStartDate: (date: DateCustom) => void;
  onChangeEndDate: (date: DateCustom) => void;
  onChangeTitle: (title: string) => void;
}

interface Props {
  titleProps?: string;
}

const UseDashboarPage = ({ titleProps = '', ..._ }: Props): Return => {
  const [title, setTitle] = useState(
    `${new DateCustom().getFormat('DD-MM-YYYY')}-${new DateCustom()
      .addDays(7)
      .getFormat('DD-MM-YYYY')}`,
  );
  const [titleInput, setTitleInput] = useState('');

  const [startDate, setStartDate] = useState(new DateCustom());
  const [endDate, setEndDate] = useState(new DateCustom().addDays(7));

  useEffect(() => {
    if (!startDate && !endDate) {
      setCookie(null, 'startDate', new DateCustom().toString());
      setCookie(null, 'endDate', new DateCustom().addDays(7).toString());
    }    
  });

  function onChangeStartDate(date: DateCustom) {
    setStartDate(date);
    setCookie(null, 'startDate', date.toString());    
  }

  const onChangeEndDate = (date: DateCustom) => {
    setEndDate(date);
    setCookie(null, 'endDate', date.toString());
  };

  const onChangeTitle = (title: string) => {
    setTitle(title);
    setTitleInput(title);
  };

  return {
    title,
    titleInput,
    startDate,
    endDate,
    setTitle,
    onChangeStartDate,
    onChangeEndDate,
    onChangeTitle,
  };
};

export default UseDashboarPage;
