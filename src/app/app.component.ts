import { Component, AfterViewInit } from '@angular/core';
import data from './channel';
import * as moment from 'moment';
import 'moment-timezone';

interface Channel {
  title: string;
  description: string;
  instructorName: string;
  instructorPhotoUrl: string;
  subjectPhotoUrl: string;
  time: string;
  timeInterval?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  public channels: Array<Channel> = [];

  ngAfterViewInit() {
    // simulate http delay
    setTimeout(() => {
      this.channels = data;
    }, 1000);
  }

  /*
  Convert into Channal Objects array by Time.
  */
  getDisplayData() {
    let displayChannels = {};
    for (let channel of this.channels) {
      let time = moment(channel.time);
      let displayTime = time.format('ddd, MMMM D, YYYY');
      channel.timeInterval = time.tz('America/New_York').format('LT') + ' - ' + time.tz('America/New_York').format('ha z');
      if (displayChannels[displayTime]) {
        displayChannels[displayTime] = [...displayChannels[displayTime], channel];
      } else {
        displayChannels[displayTime] = [channel];
      }
    }
    return displayChannels;
  }

  /*
  * Get all display keys of the channel data; 
  */
  getDisplayKeys() {
    let data = this.channels.map(channel => moment(channel.time).format("YYYY-MM-DD"))
      .sort((a, b) => a > b ? 1 : -1)
      .filter((item, index, self) => self.indexOf(item) == index)
      .map(d => moment(d).format('ddd, MMMM D, YYYY'));
    return data;
  }
}
