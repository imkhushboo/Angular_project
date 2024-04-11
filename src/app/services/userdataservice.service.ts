import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataserviceService {

  constructor( ) {

   
   }


   users(){
    return [
      {name:"Khushboo Singh",email:"vkhushboo540@gmail.com"},
      {name:"Ankit Singh",email:"riolog1127@gmail.com"}
    ]
   }
}
