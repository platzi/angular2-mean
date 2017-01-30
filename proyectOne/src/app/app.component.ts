import { Component, NgZone } from '@angular/core';

import { InputComponent } from './input/input.component';

import {TicketService} from './services/ticket.service';


import { FormBuilder, FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './services/counter';
import {Observable} from 'rxjs/Observable';

import { Router } from '@angular/router';




interface AppState {
  counter: number;
}

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  votacion = '';
  votos = [
    {title : 'Opción 1'},
    {title : 'Opción 2'},
    {title : 'Opción 3'},
    {title : 'Opción 4'}
  ];

  tickets:any;
  myForm: FormGroup;

  counter: Observable<number>;


  constructor(
    private ticketService :TicketService, 
    private fb: FormBuilder,
    private store: Store<AppState>,
    private _ngZone: NgZone,
    private router : Router,
    private af: AngularFire
    ) {
    console.log(af.database.list('/items'));

    this.counter = store.select('counter');
    this.tickets = ticketService.getTickets();
    this.myForm = fb.group({
      'name': ['Jorge']
    });

    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });

  }

   increment(){
        this.store.dispatch({ type: INCREMENT });
    }

    decrement(){
        this.store.dispatch({ type: DECREMENT });
    }

    reset(){
        this.store.dispatch({ type: RESET });
    }

  addVoto(response: string) {
    this.votacion = "Usted eligio: " + response;
  }

  cantidad = 5;
  factor = 1;



  onSubmit(value: string): void {
    console.log('El fomulario tiene:', value);
  }





//http://thoughtram.io/
  progress: number = 0;
  label: string;

  processWithinAngularZone() {
    this.label = 'inside';
    this.progress = 0;
    this._increaseProgress(() => console.log('Finalizado sin Zone!'));
  }
  processOutsideOfAngularZone() {
    this.label = 'outside';
    this.progress = 0;
    this._ngZone.runOutsideAngular(() => {
      this._increaseProgress(() => {
        this._ngZone.run(() => { console.log('Finalizado con Zone!') });
      
      });
    });
  }
  
  _increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Progreso: ${this.progress}%`);
    
    if (this.progress < 100) {
      window.setTimeout(() => {
        this._increaseProgress(doneCallback);
      }, 10);
    } else {
      doneCallback();
    }
  }  

  verTicket(id:number):void{
     this.router.navigate(['/ticket', id ]);
  }


}
