import { Component ,OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

 constructor() {}
  @Input() item: {name:String , email : String} ={name:"",email:""}


}
