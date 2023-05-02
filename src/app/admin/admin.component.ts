import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    password: new FormControl('1234'),
  });

  message!:string;

  onSubmit(){
    if (this.profileForm.value.password == "1234") {
      this.authService.setAutherized(true)
      this.message = "succesful";
    } else {
      this.authService.setAutherized(false)
      this.message = "wrong"
    }
  }
  

  constructor(private authService:AuthService){
  }

}
