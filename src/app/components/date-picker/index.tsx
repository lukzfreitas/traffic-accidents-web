import DateCustom from '@/app/models/date';
import DatePicker from 'react-datepicker';
import useDatePicker from './useState';
import 'react-datepicker/dist/react-datepicker.css';
import pt from 'date-fns/locale/pt';
import { FocusEvent } from 'react';

interface Props {
  value?: DateCustom;
  onChangeDateEvent?: Function;
}

const DatePickerCustom = ({
  onChangeDateEvent = () => {},
  value = new DateCustom(),
  ..._
}: Props) => {
  const REGEX_DATE =
    /^(((0[1-9])|([12][0-9])|(3[01]))\/((0[0-9])|(1[012]))\/((20[012]\d|19\d\d)|(1\d|2[0123])))$/;
  const { date, onChangeDate } = useDatePicker({ date: value });
  return (
    <DatePicker
      locale={pt}
      dateFormat={'dd/MM/yyyy'}
      selected={date.getDate()}
      onChangeRaw={(input: FocusEvent<HTMLInputElement, Element>) => {
        const valid = REGEX_DATE.test(input.target.value);
        if (valid) {
          onChangeDate(new DateCustom({ date: input.target.value }).getDate());
          onChangeDateEvent(new DateCustom({ date: input.target.value }));
        }
      }}
      onChange={(date: Date) => {
        onChangeDate(date);
        onChangeDateEvent(new DateCustom({ date }));
      }}
    />
  );
};

export default DatePickerCustom;
