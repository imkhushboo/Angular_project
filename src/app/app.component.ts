import { Component } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = "Reactive Form"

  loginForm = new FormGroup({
    user : new FormControl('',Validators.required),
    email : new FormControl('',[Validators.required,Validators.email])
  })


  get user(){
    return this.loginForm.get('user')
  }


  get email()
  {
    return this.loginForm.get('email')
  }

  loginUser()
  {
    console.log(this.loginForm.value);
  }



}
