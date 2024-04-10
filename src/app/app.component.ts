import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = "Data Transfer from Child to Parent "
  data = "X"
  updatedata(value : string){

    this.data = value;
    console.log(this.data);

  }
}
