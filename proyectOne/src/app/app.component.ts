import { Component } from '@angular/core';

import { InputComponent } from './input/input.component';

import {TicketService} from './services/ticket.service';


import { FormBuilder, FormGroup } from '@angular/forms';

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


  constructor(private ticketService :TicketService, private fb: FormBuilder ){
    this.tickets = ticketService.getTickets();

    // valor por defecto
    this.myForm = fb.group({
      'name': ['Jorge']
    });

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
