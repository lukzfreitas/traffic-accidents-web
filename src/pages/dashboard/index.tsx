'use client';
import DatePickerCustom from '@/app/components/date-picker';
import { Row } from '@/app/components/grid/row';
import { Input } from '@/app/components/input';
import Link from 'next/link';
import DateCustom from '@/app/models/date';
import UseDashboarPage from './useState';

const DashboardPage = () => {
  const {
    title,
    titleInput,
    startDate,
    endDate,
    startDateFormat,
    endDateFormat,
    setTitle,
    onChangeStartDate,
    onChangeEndDate,
  } = UseDashboarPage({
    startDateProps: new DateCustom({
      dateCustom: { day: 1, month: 1, year: 2013 },
    }),
    endDateProps: new DateCustom({
      dateCustom: { day: 1, month: 5, year: 2013 },
    }),
  });

  return (
    <>
      <Row width="500px" padding="5px">
        <Input
          value={titleInput}
          placeholder="Insira um titulo para a visualização"
          onChange={(value: any) => setTitle(value)}
        />
      </Row>
      <Row padding="5px">
        <DatePickerCustom
          value={startDate}
          onChangeDateEvent={(date: DateCustom) => onChangeStartDate(date)}
        />
        <div>{startDateFormat}</div>
      </Row>
      <Row padding="5px">
        <DatePickerCustom
          value={endDate}
          onChangeDateEvent={(date: DateCustom) => onChangeEndDate(date)}
        />
        <div>{endDateFormat}</div>
      </Row>
      <Row padding="5px">
        <Link
          href={{
            pathname: `/map/${title}`,
            query: {
              startDate: startDate.toString(),
              endDate: endDate.toString(),
            },
          }}
        >
          link
        </Link>
      </Row>
    </>
  );
};

export default DashboardPage;
