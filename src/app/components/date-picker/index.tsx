import DateCustom from '@/app/models/date';
import DatePicker from 'react-datepicker';
import useDatePicker from './useState';
import 'react-datepicker/dist/react-datepicker.css';
import pt from 'date-fns/locale/pt';

interface Props {
  value?: DateCustom;
  onChangeDateEvent?: Function;
}

const DatePickerCustom = ({
  onChangeDateEvent = () => {},
  value = new DateCustom(),
  ..._
}: Props) => {
  const { date, onChangeDate } = useDatePicker({ date: value });
  return (
    <DatePicker
      locale={pt}
      dateFormat={'dd/MM/yyyy'}
      selected={date.getDate()}
      onChange={(value: Date) => {        
        onChangeDate(value);
        onChangeDateEvent(new DateCustom({ date: value }));
      }}
    />
  );
};

export default DatePickerCustom;
