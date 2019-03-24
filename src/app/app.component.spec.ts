import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FunctionsComponent } from './functions/functions.component';
import { FunctionComponent } from './function/function.component';
import { ExpressionAreaComponent } from './expression-area/expression-area.component';
import { ExpressionComponent } from './expression/expression.component';
import { ExpressionParamComponent } from './expression-param/expression-param.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ExpressionAreaComponent,
        FunctionsComponent,
        FunctionComponent,
        ExpressionComponent,
        ExpressionParamComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'keysight-tech'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('keysight-tech');
  });

  it('should render header in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Expression Area');
  });
});
