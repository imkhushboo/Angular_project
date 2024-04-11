import { Component } from '@angular/core';
import { UserdataserviceService } from '../services/userdataservice.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


  user:any
  constructor(private userdata :UserdataserviceService)
  {
    console.log(userdata.users());
    this.user = userdata.users();
  }


}
