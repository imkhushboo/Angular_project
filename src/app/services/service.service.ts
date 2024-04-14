import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  headerloggedInblock = new BehaviorSubject(false)
  headerloggedInuser = new BehaviorSubject(false);
  contactdetails = new BehaviorSubject(false);
}
