import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionComponent } from './function.component';

describe('FunctionComponent', () => {
  let component: FunctionComponent;
  let fixture: ComponentFixture<FunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getProperty', () => {
    it('should return properties', () => {
      const mockFunction = {
        'add': (x, y) => {}
      };
      const name = component.getProperty(mockFunction, 'name');
      expect(name).toBe('add');
      const argsLen = component.getProperty(mockFunction, 'length');
      expect(argsLen).toBe(2);
    });
    it('should return undefined', () => {
      const mockFunction = undefined;
      const name = component.getProperty(mockFunction, 'name');
      expect(name).toBe(undefined);
      const argsLen = component.getProperty(mockFunction, 'length');
      expect(argsLen).toBe(undefined);
    });
  });

});
