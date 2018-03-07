import { TestBed, async } from '@angular/core/testing';
import { IChannel, Channel } from './channel.model';

describe('AppComponent', () => {
  it('should create timeInterval', async(() => {
    let channel = new Channel("Nulla convallis dolor quis erat.",
      "Sed hendrerit luctus finibus. Sed justo dui, vulputate ac suscipit condimentum, porttitor sed dolor. Ut eu justo at metus dapibus facilisis a quis libero. Integer lectus turpis, pretium a tincidunt.",
      "Erat Libero",
      "https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
      "https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
      "2016-01-03 22:00:00")
    expect(channel.timeInterval).toBe("10:00 PM - 10pm EST");
  }));

  it('should create displayTime', async(() => {
    let channel = new Channel("Nulla convallis dolor quis erat.",
      "Sed hendrerit luctus finibus. Sed justo dui, vulputate ac suscipit condimentum, porttitor sed dolor. Ut eu justo at metus dapibus facilisis a quis libero. Integer lectus turpis, pretium a tincidunt.",
      "Erat Libero",
      "https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
      "https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
      "2016-01-03 22:00:00")
    expect(channel.displayTime).toBe('Sun, January 3, 2016');
  }));

  it('should create displayTime', async(() => {
    let channel = new Channel("Nulla convallis dolor quis erat.",
      "Sed hendrerit luctus finibus. Sed justo dui, vulputate ac suscipit condimentum, porttitor sed dolor. Ut eu justo at metus dapibus facilisis a quis libero. Integer lectus turpis, pretium a tincidunt.",
      "Erat Libero",
      "https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
      "https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
      "2016-01-03 22:00:00")
    expect(channel.yearMonthDayFormat).toBe('2016-01-03');
  }));

});