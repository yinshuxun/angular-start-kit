import {Component} from '@angular/core';
import {Hero} from './hero-list/hero'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.contain {display: flex;justify-content: center;}']
})
export class AppComponent {
  title: string = 'Header Area'

  heroes: Hero[] = [
    new Hero('1', 'Windstorm'),
    new Hero('212', 'Bombasto'),
    new Hero('123', 'Magneta'),
    new Hero('123123', 'Tornado')
  ]
}
