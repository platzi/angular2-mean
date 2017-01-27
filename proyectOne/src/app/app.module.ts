import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


//input 
import {InputComponent} from './input/input.component';

//pipes
import { ConversorPipe } from './pipes/conversor.pipe';

//directivas
import { HighlightDirective } from './directives/highlight.directive';
import { GigantDirective } from './directives/gigant.directive';

//DI services
import { TicketService } from './services/ticket.service';

//FORMS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//NGRx
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './services/counter';

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
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore({ counter: counterReducer })
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
