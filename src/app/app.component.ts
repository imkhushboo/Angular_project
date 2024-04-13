import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = "Exercise in Angular"

  users:any = []
  admins:any =[]


  updateuser(value:string)
  {
    this.users.push(value);
  }

  updateadmin(value:string)
  {
    this.admins.push(value);
  }

  removeuser(index:number)
  {
    this.users.splice(index,1);
  }


  removeadmin(index:number)
  {
    this.admins.splice(index,1);
  }
}
