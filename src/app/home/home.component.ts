import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy{
  constructor(private _service : ServiceService)
  {

  }

  ngOnInit(): void {
    this._service.headerloggedInblock.next(true)
    this._service.headerloggedInuser.next(true)
    
  }

  ngOnDestroy(): void {
    this._service.headerloggedInblock.next(false)
    this._service.headerloggedInuser.next(false)
    }


}
