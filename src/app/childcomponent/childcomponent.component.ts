import { Component, Input, OnInit } from '@angular/core';
import { DatautilityService } from '../datautility.service';


@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit{
  constructor(private _msgService : DatautilityService)
  {
  }

  ngOnInit(): void {
    this._msgService.username.subscribe(username =>  this.user  = username)
  }

  @Input() boxcolor:string = ""
  user:any;


  updateUser(value:string){
    this._msgService.username.next(value)
  }



}
