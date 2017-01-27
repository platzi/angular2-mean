import { Component } from '@angular/core';

import { InputComponent } from './input/input.component';

import {TicketService} from './services/ticket.service';


import { FormBuilder, FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './services/counter';
import {Observable} from 'rxjs/Observable';


interface AppState {
  counter: number;
}


@Component({
  selector: 'app-root',
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
    private store: Store<AppState>
  ){      
    this.counter = store.select('counter');
    this.tickets = ticketService.getTickets();
    this.myForm = fb.group({
      'name': ['Jorge']
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


}
