import { Component } from '@angular/core';
import { UserdataserviceService } from './services/userdataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = "Services in Angular"
   user:any
  constructor(private userdata :UserdataserviceService)
  {
    console.log(userdata.users());
    this.user = userdata.users();
  }




}
