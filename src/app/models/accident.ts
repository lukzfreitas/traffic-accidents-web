import Coordinate from './coordinate';

export default class Accident {
  private datetime: any;

  private latLng: Coordinate;

  constructor({ DATA_HORA, LATITUDE, LONGITUDE }: any) {
    this.datetime = new Date(DATA_HORA);
    this.latLng = new Coordinate(LATITUDE, LONGITUDE);
  }

  getLatLng(): Coordinate {
    return this.latLng;
  }

  getDatetime(): Date {
    return this.datetime;
  }
}
