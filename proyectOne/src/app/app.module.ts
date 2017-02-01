import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pageNotFound/page.not.found.component';
import {InitComponent } from './init.component';
import { TicketDetail } from './tickets/ticket.detail';
import { UpdateComponent } from './update/update.component';
//input 
import {InputComponent} from './input/input.component';

//pipes
import { ConversorPipe } from './pipes/conversor.pipe';

//directivas
import { HighlightDirective } from './directives/highlight.directive';
import { GigantDirective } from './directives/gigant.directive';

//service
import { TicketService } from './services/ticket.service';

//ngrx
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './services/counter';


//routes 
import { RouterModule, Routes } from '@angular/router';
import { APPROUTER } from './commons/router';


//material 
import { MaterialModule } from '@angular/material';
import 'hammerjs';

//firebase 
import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';

export const firebaseConfig={
  apiKey: "AIzaSyCBdhsSxJmTB0Zj6Br2W5laVhZPEJ25u40",
  authDomain: "angular-platzi.firebaseapp.com",
  databaseURL: "https://angular-platzi.firebaseio.com",
  storageBucket: "angular-platzi.appspot.com",
  messagingSenderId: "380289465137"
};

export const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}

import { ButtonModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ConversorPipe,
    HighlightDirective,
    GigantDirective,
    PageNotFoundComponent,
    InitComponent,
    TicketDetail,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore({counter: counterReducer}),
    RouterModule.forRoot(APPROUTER),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    MaterialModule.forRoot()

  ],
  providers: [TicketService],
  bootstrap: [InitComponent]
})
export class AppModule { }
