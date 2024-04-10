import { Component ,OnInit ,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

 constructor() {}

 @Output() updateEvent = new EventEmitter();

}
