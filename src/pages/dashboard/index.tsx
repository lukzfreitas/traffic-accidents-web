'use client';
import DatePickerCustom from '@/app/components/date-picker';
import { Row } from '@/app/components/grid/row';
import { Input } from '@/app/components/input';
import Link from 'next/link';
import DateCustom from '@/app/models/date';
import UseDashboarPage from '../../app/utils/hooks/dashboard/useState';

const DashboardPage = () => {
  const {
    title,
    titleInput,
    startDate,
    endDate,
    setTitle,
    onChangeStartDate,
    onChangeEndDate,
  } = UseDashboarPage({});

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
          onChangeDateEvent={(date: DateCustom) => {
            onChangeStartDate(date);
          }}
        />
        <div>{startDate.getFormat()}</div>
      </Row>
      <Row padding="5px">
        <DatePickerCustom
          value={endDate}
          onChangeDateEvent={(date: DateCustom) => onChangeEndDate(date)}
        />
        <div>{endDate.getFormat()}</div>
      </Row>
      <Row padding="5px">
        <Link href={`/map/${title}`}>link</Link>
      </Row>
    </>
  );
};

export default DashboardPage;
