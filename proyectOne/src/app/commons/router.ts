import { Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { PageNotFoundComponent } from '../pageNotFound/page.not.found.component';
import { TicketDetail } from '../tickets/ticket.detail';

export const APPROUTER:Routes= [
    {path:'', component: AppComponent},
    {path:'ticket/:id', component:TicketDetail},
    {path:'**', component: PageNotFoundComponent}
]