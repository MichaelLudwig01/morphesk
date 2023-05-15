import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';


interface req {
  array: string,
  content: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  auth!:boolean;

  text:string = ''

  homeText = new FormGroup({
    array: new FormControl('homeText'),
    content: new FormControl(this.text, Validators.required)
  })

  updateText(){

    console.log(this.homeText.value)
    this.http.post("http://localhost:8000/updateText", this.homeText.value).subscribe(res => {
      this.ngOnInit();
    })
  }

  constructor(private authService:AuthService, private http:HttpClient){
    this.auth = this.authService.getAutherized();
  }

  ngOnInit() {
    this.http.get("http://localhost:8000/getText/homeText").subscribe(res => {
      this.text = res.toString();
      this.homeText.patchValue({
        content: this.text
      });
    });
  }
}
