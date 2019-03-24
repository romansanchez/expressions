import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropService {
  events: Array<Object>;

  constructor() {
    this.events = [];
  }

  onDrop(event) {
    if (this.events.length > 0) {
      this.clear();
    }
    this.events.push(this.mapEvent(event));
    return this.events;
  }

  onDragOver(event) {
    event.dataTransfer.dropEffect = 'copy';
  }

  mapEvent(event) {
    return {
      'name': event.dataTransfer.getData('name'),
      'argsLen': event.dataTransfer.getData('argsLen')
    };
  }

  clear() {
    this.events = [];
  }
}
