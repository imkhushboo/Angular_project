import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private _headerloggedInuser : ServiceService) {}
  contactdetails :any
  loggedInBlock:any
  loggedInuser:any
  username :string = "Khushboo"

  ngOnInit(): void {
    this._headerloggedInuser.headerloggedInblock.subscribe(loggedInBlock => { console.log(this.loggedInBlock, " ", loggedInBlock);this.loggedInBlock = loggedInBlock});
    this._headerloggedInuser.headerloggedInuser.subscribe( loggedInuser => this.loggedInuser = loggedInuser);
    this._headerloggedInuser.contactdetails.subscribe(contactdetails=> this.contactdetails = contactdetails);
  }

}
