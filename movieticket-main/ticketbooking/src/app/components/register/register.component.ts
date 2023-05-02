import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: String | undefined
  password: String | undefined 
  email: String | undefined 
  id: String | undefined

  show(){
    console.log(this.username);
    console.log(this.password);
    console.log(this.email);
  }
  
}







