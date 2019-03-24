import { TestBed } from '@angular/core/testing';

import { DropService } from './drop.service';

describe('DropService', () => {
  let service: DropService;

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    service = TestBed.get(DropService);
    expect(service).toBeTruthy();
  });

  it('should init with no events', () => {
    expect(service.events.length).toBe(0);
  });

  describe('onDrop', () => {
    it('should capture event', () => {
      const dropEvent = {};
      const mockEvent = {
        'name': 'foo',
        'argsLen': 3
      };
      spyOn(service, 'mapEvent').and.returnValue(mockEvent);
      service.onDrop(dropEvent);
      expect(service.events.length).toBe(1);
      expect(service.events[0]['name']).toBe('foo');
      expect(service.events[0]['argsLen']).toBe(3);
    });
  });

  describe('onDragOver', () => {
    it('should set dropEffect to copy', () => {
      const mockEvent = {
        dataTransfer: {
          dropEffect: ''
        }
      };
      service.onDragOver(mockEvent);
      expect(mockEvent.dataTransfer.dropEffect).toBe('copy');
    });
  });

  describe('clear', () => {
    it('should not be called if first event captured', () => {
      service.events = [];
      const dropEvent = {};
      const mockEvent = {
        'name': 'foo',
        'argsLen': 3
      };
      spyOn(service, 'mapEvent').and.returnValue(mockEvent);
      spyOn(service, 'clear');
      service.onDrop(dropEvent);
      expect(service.clear).toHaveBeenCalledTimes(0);
    });
    it('should be called if previous events captured', () => {
      service.events = [];
      const dropEvent = {};
      const mockEvent = {
        'name': 'foo',
        'argsLen': 3
      };
      spyOn(service, 'mapEvent').and.returnValue(mockEvent);
      spyOn(service, 'clear');
      service.onDrop(dropEvent);
      service.onDrop(dropEvent);
      expect(service.clear).toHaveBeenCalledTimes(1);
    });
  });



});
