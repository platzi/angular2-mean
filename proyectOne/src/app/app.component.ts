import { Component } from '@angular/core';

import { InputComponent } from './input/input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  votos = [
    {title : 'Opción 1'},
    {title : 'Opción 2'},
    {title : 'Opción 3'},
    {title : 'Opción 4'}
  ]
}
