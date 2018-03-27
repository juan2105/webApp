import { Component } from '@angular/core';
import { Componente1Component} from './componente1/componente1.component';
import { Componente2Component} from './componente2/componente2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
