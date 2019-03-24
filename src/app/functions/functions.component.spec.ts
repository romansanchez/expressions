import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionsComponent } from './functions.component';
import { FunctionComponent } from '../function/function.component';

describe('FunctionsComponent', () => {
  let component: FunctionsComponent;
  let fixture: ComponentFixture<FunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FunctionsComponent,
        FunctionComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getFunctions', () => {
    it('should return functions', () => {
      const functions = component.getFunctions();
      expect(functions.length).toBe(4);
      const functionNames = functions.map((x) =>  Object.keys(x)[0] );
      expect(functionNames).toEqual(['add', 'subtract', 'foo', 'doSomethingComplicated']);
    });
  });
});
