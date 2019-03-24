import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.scss']
})
export class FunctionComponent implements OnInit {
  @Input() function: Function;
  name: string;
  argsLen: number;

  constructor() {
    this.name = '';
    this.argsLen = 0;
  }

  ngOnInit() {
    this.name = this.getProperty(this.function, 'name');
    this.argsLen = this.getProperty(this.function, 'length');
  }

  getProperty(func, property) {
    if (func !== undefined) {
      const keys = Object.keys(func);
      if (keys.length === 1) {
        return func[keys[0]][property];
      }
    }
    return undefined;
  }

  onDragStart(event) {
    event.dataTransfer.setData('name', this.name);
    event.dataTransfer.setData('argsLen', this.argsLen);
  }

}
