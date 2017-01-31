import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { TICKETS } from './mocks/tickets.mock';



@Injectable()
export class TicketService{

    urlBackend = "http://localhost:3000/";

    constructor (private http: Http) {}

   getTicketsMongo (): Promise<any[]> {
    return this.http.get(this.urlBackend + 'tickets')
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
      let body = res.json();
      console.log("body", body);
      return body || { };
  }

  private handleError (error: Response | any) {
    // en el mundo real, esto deberia ir a un log de archivo
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  updateTicketMongo(ticket: any): Promise<any> {
  //let headers = new Headers({ 'Content-Type': 'application/json' });
  //let options = new RequestOptions({ headers: headers });
    return this.http.post(
                  this.urlBackend+'ticketUpdate',
                  { 
                      'id': ticket.id,
                      'titulo': ticket.titulo,
                      'estado': ticket.estado
                  }
              )
              .toPromise()
              .then(this.extractData)
              .catch(this.handleError);
  }

  deleteTicketMongo(ticket:any): Promise<any> {
    //let headers = new Headers({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers });
    return this.http.post(
                  this.urlBackend+'ticketDelete',
                  { 
                      'id': ticket.id
                  }
              )
              .toPromise()
              .then(this.extractData)
              .catch(this.handleError);
  }


    miVariableTicketGlobal = "soy una variable";

    getTickets(){
        return TICKETS;
    }

    getVariableGlobal():string{
        return this.miVariableTicketGlobal;
    }

    getTicket(id:number){
    let ticket = TICKETS.find(x => x.id === id);
      return ticket;
    }

    getTicketObserver(id) {
    return Observable.create(observer => {
      setTimeout(() => {
      observer.next(TICKETS.find((ticket) => ticket.id == id))
      }, 3000);
    });
  }

}