import { Component, OnInit } from '@angular/core';
import { DropService } from '../drop.service';

@Component({
  selector: 'app-expression-param',
  templateUrl: './expression-param.component.html',
  styleUrls: ['./expression-param.component.scss']
})
export class ExpressionParamComponent implements OnInit {
  expressions: Array<Object>;

  constructor(private dropSvc: DropService) {
    this.expressions = [];
  }

  ngOnInit() {
  }

  onDrop(event) {
    event.stopPropagation();
    event.preventDefault();
    this.expressions = this.dropSvc.onDrop(event);
  }

  onDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
    this.dropSvc.onDragOver(event);
  }

}
