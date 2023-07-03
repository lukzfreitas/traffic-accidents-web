import DateCustom from '@/app/models/date';
import UseStorage from '@/app/utils/hooks/useStorage';
import { useState } from 'react';

interface Return {
  title: string;
  titleInput: string;
  startDate: DateCustom;
  endDate: DateCustom;
  startDateFormat: string;
  endDateFormat: string;
  setTitle: (title: string) => void;
  onChangeStartDate: (date: DateCustom) => void;
  onChangeEndDate: (date: DateCustom) => void;
  onChangeTitle: (title: string) => void;
}

interface Props {
  startDateProps?: DateCustom;
  endDateProps?: DateCustom;
  titleProps?: string;
}

const UseDashboarPage = ({
  titleProps = '',
  startDateProps = new DateCustom(),
  endDateProps = new DateCustom().addDays(7),
  ..._
}: Props): Return => {
  const [title, setTitle] = useState(
    `${startDateProps.getFormat('DD-MM-YYYY')}-${endDateProps.getFormat(
      'DD-MM-YYYY',
    )}`,
  );
  const [titleInput, setTitleInput] = useState('');
  const [startDate, setStartDate] = useState(startDateProps);
  const [endDate, setEndDate] = useState(endDateProps);
  const [startDateFormat, setStartDateFormat] = useState(
    startDateProps.getFormat(),
  );
  const [endDateFormat, setEndDateFormat] = useState(endDateProps.getFormat());
  const { setItem } = UseStorage();  

  function onChangeStartDate(date: DateCustom) {
    setStartDate(date);
    setStartDateFormat(date.getFormat());
    setItem('startDate', date.toString());
  }

  const onChangeEndDate = (date: DateCustom) => {
    setEndDate(date);
    setEndDateFormat(date.getFormat());
    setItem('endDate', date.toString());
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
    startDateFormat,
    endDateFormat,
    setTitle,
    onChangeStartDate,
    onChangeEndDate,
    onChangeTitle,
  };
};

export default UseDashboarPage;
