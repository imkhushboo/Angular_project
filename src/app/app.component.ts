import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = "Basic Form"
  userDetails : any ={}

  getFormDetails(value:NgForm)
  {
    this.userDetails = value
  }
}
