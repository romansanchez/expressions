import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionComponent } from './expression.component';
import { ExpressionParamComponent } from '../expression-param/expression-param.component';

describe('ExpressionComponent', () => {
  let component: ExpressionComponent;
  let fixture: ComponentFixture<ExpressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExpressionComponent,
        ExpressionParamComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Having params', () => {
    it('should create params', () => {
      component.expression = {
        'name': 'mock',
        'argsLen': 3
      };
      component.initParams();
      expect(component.getExpressionParams().length).toBe(3);
    });
  });

  describe('Not having params', () => {
    it('should not create params', () => {
      component.expression = {
        'name': 'mock',
        'argsLen': 0
      };
      component.initParams();
      expect(component.getExpressionParams().length).toBe(0);
    });
  });
});
