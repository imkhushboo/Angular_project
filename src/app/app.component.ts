import { Component, OnInit } from '@angular/core';
import { DatautilityService } from './datautility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = "API call"
  products:any = []
  constructor(private _msgService : DatautilityService){}

  ngOnInit(){

    this._msgService.product().subscribe(productdata => this.products = productdata)

    console.log(this.products);

  }

}
