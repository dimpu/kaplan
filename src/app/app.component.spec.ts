import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as prop 'channels'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.channels).toEqual([]);
  }));

  it('should return dispalyChannels object from channels object', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.channels = [{
      "title": "Nulla convallis dolor quis erat.",
      "description": "Sed hendrerit luctus finibus. Sed justo dui, vulputate ac suscipit condimentum, porttitor sed dolor. Ut eu justo at metus dapibus facilisis a quis libero. Integer lectus turpis, pretium a tincidunt.",
      "instructorName": "Erat Libero",
      "instructorPhotoUrl": "https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
      "subjectPhotoUrl": "https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
      "time": "2016-01-03 22:00:00"
    }];
    fixture.detectChanges();
    app.genDisplayData();
    fixture.detectChanges();
    let exp = {
      "Sun, January 3, 2016": [
        {
          "title": "Nulla convallis dolor quis erat.",
          "description": "Sed hendrerit luctus finibus. Sed justo dui, vulputate ac suscipit condimentum, porttitor sed dolor. Ut eu justo at metus dapibus facilisis a quis libero. Integer lectus turpis, pretium a tincidunt.",
          "instructorName": "Erat Libero",
          "instructorPhotoUrl": "https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
          "subjectPhotoUrl": "https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
          "time": "2016-01-03 22:00:00", "timeInterval": "10:00 PM - 10pm EST"
        }
      ]
    };
    expect(Object.keys(app.displayChannels)).toEqual(["Sun, January 3, 2016"]);
  }));
});
