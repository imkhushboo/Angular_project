import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app'
  count = 0
  setcount(type: string) {
    type === 'minus' ? this.count-- : this.count++;
  }
}
