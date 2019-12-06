import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    // tslint:disable-next-line: no-floating-promises
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    // tslint:disable-next-line: no-floating-promises
    expect(app)
    .toBeTruthy();
  });

  it("should have as title 'Nwk-clr'", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    // tslint:disable-next-line: no-floating-promises
    expect(app.title)
    .toEqual('Nwk-clr');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    // tslint:disable-next-line: no-floating-promises
    expect(compiled.querySelector('.content span').textContent)
    .toContain('Nwk-clr app is running!');
  });
});
