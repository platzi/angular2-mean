import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { TicketService } from '../services/ticket.service';

@Component({
    selector: 'ticket-detail',
    templateUrl: 'ticket.detail.html'
})
export class TicketDetail{
    ticket:any;
    errorMessage:string;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service : TicketService
    ){

    }
/*
    ngOnInit(){
        let id = +this.route.snapshot.params['id'];
        this.ticket = this.service.getTicket(id);
    }
*/
    ngOnInit(){
        /*
        this.service.getTicketObserver(this.route.snapshot.params['id'])
            .subscribe(ticket=>this.ticket = ticket);
        */
        this.service.getTicketMongo(+this.route.snapshot.params['id'])
            .then(
            ticket => this.ticket = ticket,
            error => this.errorMessage = <any>error
            )
    }

}