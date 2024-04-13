import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatautilityService {

  constructor(private http:HttpClient) { }

  // product() : Observable<any> {
  //   return this.http.get("https://jsonplaceholder.typicode.com/todos")
  // }


  // username  = new Subject<any>();
  username = new BehaviorSubject("khush");
}
