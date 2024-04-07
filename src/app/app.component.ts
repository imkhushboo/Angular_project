import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "For Loop"
  color = ["red","purple","yellow","black","brown","green"]
  user_details = [
    {
      name:"naruto",
      anime:"yuganda",
      phoneno:1234
    },
    {
      name:"shinchan",
      anime:"shinchanc",
      phoneno:1234
    },
    {
      name:"kazama",
      anime:"shinchan",
      phoneno:1234
    },
    
  ]

  }
