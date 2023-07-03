import moment from 'moment';

interface Props {
  date?: string | Date;
  dateCustom?: {
    day: number;
    month: number;
    year: number;
    hour?: number;
    minutes?: number;
  };
}

export default class DateCustom {
  private date: Date;

  readonly LOCALE = 'pt-br';

  constructor({ date, dateCustom }: Props = {}) {
    if (typeof date === 'string') {
      this.date = moment(date).locale(this.LOCALE).toDate();
      return;
    }
    if (date instanceof Date) {
      this.date = date;
      return;
    }
    if (dateCustom) {
      this.date = new Date(
        dateCustom.year,
        dateCustom.month - 1,
        dateCustom.day,
        dateCustom.hour || 0,
        dateCustom.minutes || 0,
      );
      return;
    }
    this.date = new Date();
  }

  getDate = () => this.date;

  getDay = () => this.date.getDay();

  getMonth = () => this.date.getMonth() + 1;

  getYear = () => this.date.getFullYear();

  getFormat = (format: string = 'DD/MM/YYYY') =>
    moment(this.date).locale(this.LOCALE).format(format);

  addDays = (days: number): DateCustom => {
    this.date.setDate(this.date.getDate() + days);
    return this;
  };

  oddDays = (days: number): DateCustom => {
    this.date.setDate(this.date.getDate() - days);
    return this;
  };

  addMonth = (months: number): DateCustom => {
    this.date.setMonth(this.date.getMonth() + months);
    return this;
  };

  oddMonth = (months: number): DateCustom => {
    this.date.setMonth(this.date.getMonth() - months);
    return this;
  };

  addYears = (years: number) => {
    this.date.setFullYear(this.date.getFullYear() + years);
    return this;
  };

  oddYears = (years: number) => {
    this.date.setFullYear(this.date.getFullYear() - years);
    return this;
  };

  addHours = (hours: number) => {
    this.date.setHours(this.date.getHours() + hours);
    return this;
  };

  oddHours = (hours: number) => {
    this.date.setHours(this.date.getHours() - hours);
    return this;
  };

  toString = () =>
    moment(this.date).locale(this.LOCALE).format('YYYY-MM-DDTHH:mm:ss');
}
