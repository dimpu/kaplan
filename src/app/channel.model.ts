import * as moment from 'moment';
import 'moment-timezone';

export interface IChannel {
  readonly displayTime?: string;
  readonly timeInterval?: string;
  readonly yearMonthDayFormat?: string;

  title: string;
  description: string;
  instructorName: string;
  instructorPhotoUrl: string;
  subjectPhotoUrl: string;
  time: string;
}

export class Channel implements IChannel {
  constructor(
    public title: string,
    public description: string,
    public instructorName: string,
    public instructorPhotoUrl: string,
    public subjectPhotoUrl: string,
    public time: string) {
  }

  get timeInterval() {
    return moment(this.time).tz('America/New_York').format('LT') + ' - ' + moment(this.time).tz('America/New_York').format('ha z');
  }

  get displayTime() {
    return moment(this.time).format('ddd, MMMM D, YYYY');
  }
  
  get yearMonthDayFormat() {
    return moment(this.time).format("YYYY-MM-DD");
  }

}
