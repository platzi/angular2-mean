import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


//input 
import {InputComponent} from './input/input.component';

//pipes
import { ConversorPipe } from './pipes/conversor.pipe';

//directivas
import { HighlightDirective } from './directives/highlight.directive';
import { GigantDirective } from './directives/gigant.directive';
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ConversorPipe,
    HighlightDirective,
    GigantDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
