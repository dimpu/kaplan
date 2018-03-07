import { Component, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate, state, keyframes} from '@angular/animations';
import data from './channel';
import { IChannel, Channel } from './channel.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeIn', [ // example how we can create simple animations for better UX.
      state('in', style({transform: 'translateY(0)'})),
      transition(':enter', [
        animate(500, keyframes([
          style({opacity: 0, transform: 'translateY(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
        ]))
      ]),
    ]),
  ]

})
export class AppComponent implements AfterViewInit {
  public channels: Array<IChannel> = [];
  public displayChannels: any = [];
  public displayTitle: any = [];
  private _displayTitle: any = [];
  next: number = 0;

  ngAfterViewInit() {
    // simulate http delay
    setTimeout(() => {
      this.channels = data;
      this.genDisplayData();
      this._displayTitle = this.getDisplayKeys();
      this.doNext();
    }, 1000);
  }

  doNext() {
    if(this.next < this._displayTitle.length) {
      this.displayTitle.push(this._displayTitle[this.next++]);
    }
  }

  /*
  Convert into Channal Objects array by Time.
  */
  genDisplayData() {
    for (let channel of this.channels) {
      channel = new Channel(
        channel.title,
        channel.description,
        channel.instructorName,
        channel.instructorPhotoUrl,
        channel.subjectPhotoUrl,
        channel.time)

      let displayTime = channel.displayTime;
      if (this.displayChannels[displayTime]) {
        this.displayChannels[displayTime] = [...this.displayChannels[displayTime], channel];
      } else {
        this.displayChannels[displayTime] = [channel];
      }
    }
  }

  /*
  * Get all display keys of the channel data; 
  */
  getDisplayKeys() {
    return Object.keys(this.displayChannels)
      .sort((a, b) => new Date(a) > new Date(b) ? 1 : -1)
      .filter((item, index, self) => self.indexOf(item) == index)
  }
}
