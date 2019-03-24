import { Component, OnInit } from '@angular/core';
import { DropService } from '../drop.service';

@Component({
  selector: 'app-expression-area',
  templateUrl: './expression-area.component.html',
  styleUrls: ['./expression-area.component.scss']
})
export class ExpressionAreaComponent implements OnInit {
  expressions: Array<Object>;

  constructor(private dropSvc: DropService) {
    this.expressions = [];
  }

  ngOnInit() {}

  onDrop(event) {
    event.preventDefault();
    this.expressions = this.dropSvc.onDrop(event);
  }

  onDragOver(event) {
    event.preventDefault();
    this.dropSvc.onDragOver(event);
  }
}
