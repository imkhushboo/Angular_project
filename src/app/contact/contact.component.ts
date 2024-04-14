import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,OnDestroy{

  constructor(private _service : ServiceService)
  {
     
  }

  ngOnInit(): void {
    this._service.contactdetails.next(true);
  }

  ngOnDestroy(): void {
    this._service.contactdetails.next(false);
  }
}
