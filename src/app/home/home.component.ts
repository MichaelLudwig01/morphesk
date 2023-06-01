import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


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

  auth(){
    return this.authService.authorized;
  }

  text:string = ''

  homeText = new FormGroup({
    array: new FormControl('homeText'),
    content: new FormControl(this.text, Validators.required)
  })

  updateText(){

    console.log(this.homeText.value)
    this.http.post("http://ludwig-michael22.de:8000/updateText", this.homeText.value).subscribe(res => {
      this.ngOnInit();
      this._snackBar.open("Text was updated succesfully", 'Okay');
    })
  }

  constructor(private authService:AuthService, private http:HttpClient, private _snackBar: MatSnackBar){
  }

  ngOnInit() {
    this.http.get("http://ludwig-michael22.de:8000/getText/homeText").subscribe(res => {
      this.text = res.toString();
      this.homeText.patchValue({
        content: this.text
      });
    });
  }
}
