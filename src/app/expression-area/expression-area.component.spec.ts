import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionAreaComponent } from './expression-area.component';
import { ExpressionComponent } from '../expression/expression.component';
import { ExpressionParamComponent } from '../expression-param/expression-param.component';
import { DropService } from '../drop.service';

describe('ExpressionAreaComponent', () => {
  let component: ExpressionAreaComponent;
  let fixture: ComponentFixture<ExpressionAreaComponent>;
  let dropSvc: DropService;
  const mockEvent = {
    'preventDefault': () => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExpressionAreaComponent,
        ExpressionComponent,
        ExpressionParamComponent
      ],
      providers: [
        DropService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressionAreaComponent);
    component = fixture.componentInstance;
    dropSvc = TestBed.get(DropService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init with no expressions', () => {
    expect(component.expressions.length).toBe(0);
  });

  describe('onDrop', () => {
    it('should call drop service', () => {
      spyOn(dropSvc, 'onDrop');
      component.onDrop(mockEvent);
      expect(dropSvc.onDrop).toHaveBeenCalledTimes(1);
      expect(dropSvc.onDrop).toHaveBeenCalledWith(mockEvent);
    });
    it('should set expression', () => {
      const mockEvents = [{
        'name': 'foo',
        'argsLen': 2
      }];
      spyOn(dropSvc, 'onDrop').and.returnValue(mockEvents);
      component.onDrop(mockEvent);
      expect(component.expressions.length).toBe(1);
      expect(component.expressions[0]['name']).toBe('foo');
      expect(component.expressions[0]['argsLen']).toBe(2);
    });
  });

  describe('onDragOver', () => {
    it('should call drop service', () => {
      spyOn(dropSvc, 'onDragOver');
      component.onDragOver(mockEvent);
      expect(dropSvc.onDragOver).toHaveBeenCalledTimes(1);
      expect(dropSvc.onDragOver).toHaveBeenCalledWith(mockEvent);
    });
  });
});
