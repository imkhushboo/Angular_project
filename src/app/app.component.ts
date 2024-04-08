import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Nested For Loop"

  user_details = [
    {
      name:"naruto",
      anime:["yuganda","hiskoa"],
      phoneno:1234
    },
    {
      name:"shinchan",
      anime:["shinchanc","shiangami","lilace"],
      phoneno:1234
    },
    {
      name:"kazama",
      anime:["shinchan","yosiba","honiri"],
      phoneno:1234
    },
    
  ]

  }
