import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss']
})
export class FunctionsComponent implements OnInit {
  functions: Array<Object>;

  constructor() {
    this.functions = [];
  }

  ngOnInit() {
    this.functions = this.getFunctions();
  }

  getFunctions() {
    return [
      {
        'add': (x, y) => {}
      },
      {
        'subtract': (x, y) => {}
      },
      {
        'foo': (x, y, z) => {}
      },
      {
        'doSomethingComplicated': (x) => {}
      }
    ];
  }

}
