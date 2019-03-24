import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExpressionAreaComponent } from './expression-area/expression-area.component';
import { FunctionsComponent } from './functions/functions.component';
import { FunctionComponent } from './function/function.component';
import { ExpressionComponent } from './expression/expression.component';
import { ExpressionParamComponent } from './expression-param/expression-param.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpressionAreaComponent,
    FunctionsComponent,
    FunctionComponent,
    ExpressionComponent,
    ExpressionParamComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
