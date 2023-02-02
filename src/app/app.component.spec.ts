import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app-27-calculadora'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('app-27-calculadora');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')?.textContent).toContain('app-27-calculadora app is running!');
  });

  it(`Test Suma se espera de resultado 10`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const mockeData = {option:1, num1: 4, num2: 6};
    const expectedResult = 10;

    const result = mockeData.num1 + mockeData.num2;

    expect(result).toEqual(expectedResult);
    
  });

  it(`Test resta se espera de resultado 6`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const mockeData = {option:2, num1: 12, num2: 6};
    const expectedResult = 6;

    const result = mockeData.num1 - mockeData.num2;

    expect(result).toEqual(expectedResult);
    
  });


  it(`Test multiplicacion se espera de resultado 20`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const mockeData = {option:3, num1: 4, num2: 5};
    const expectedResult = 20;

    const result = mockeData.num1 * mockeData.num2;

    expect(result).toEqual(expectedResult);
    
  });

  it(`Test division se espera de resultado 5`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const mockeData = {option:3, num1: 20, num2: 4};
    const expectedResult = 5;

    const result = mockeData.num1 / mockeData.num2;

    expect(result).toEqual(expectedResult);
    
  });

});

