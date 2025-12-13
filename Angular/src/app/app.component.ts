import { Component } from '@angular/core';
import { ClickEvent } from 'devextreme/ui/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular';

  counter = 0;

  buttonText = 'Click count: 0';

  onClick(_e: ClickEvent): void {
    this.counter++;
    this.buttonText = `Click count: ${this.counter}`;
  }
}
