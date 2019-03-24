import { Component, OnInit, Input } from '@angular/core';
import { expressionType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.scss']
})
export class ExpressionComponent implements OnInit {
  @Input() expression: Object;
  expressionParams: Array<number>;

  constructor() {
    this.expression = {};
    this.expressionParams = [];
  }

  ngOnInit() {
    this.initParams();
  }

  initParams() {
    const paramsLen = this.expression['argsLen'];
    if (paramsLen !== undefined) {
      for (let i = 0; i < paramsLen; i++) {
        this.expressionParams.push(i);
      }
    }
  }

  getExpressionParams() {
    return this.expressionParams;
  }

  setExpressionParams(params) {
    this.expressionParams = params;
  }

}
