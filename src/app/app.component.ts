import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'directives-assignment';

  oddNumbers = [3, 5, 7, 11, 13];
  evenNumbers = [2, 4, 6, 8, 10];
  onlyOdd = false;
  value = 10;
}
