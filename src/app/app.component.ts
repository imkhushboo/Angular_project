import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = "Reusable component"

  user_data = [
    {
      name : "Khushboo",
      email:"vkhushboo540@gmail.com"
    },
    {
      name : "Ankit Singh",
      email: "heelriolog@gmail.com"
    }
  ]
}
