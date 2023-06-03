import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-vita',
  templateUrl: './vita.component.html',
  styleUrls: ['./vita.component.scss']
})
export class VitaComponent implements OnInit{

  auth(){
    return this.authService.authorized;
  }

  TrioText: string = '';
  IlianText: string = '';
  FranziskaText: string = '';
  SophiaText: string = '';

  TrioTextForm = new FormGroup({
    array: new FormControl('TrioText'),
    content: new FormControl(this.TrioText, Validators.required)
  });

  IlianTextForm = new FormGroup({
    array: new FormControl('IlianText'),
    content: new FormControl(this.IlianText, Validators.required)
  });

  FranziskaTextForm = new FormGroup({
    array: new FormControl('FranziskaText'),
    content: new FormControl(this.FranziskaText, Validators.required)
  });

  SophiaTextForm = new FormGroup({
    array: new FormControl('SophiaText'),
    content: new FormControl(this.SophiaText, Validators.required)
  });

  updateTrioText(){

    this.http.post("http://ludwig-michael22.de:8000/updateText", this.TrioTextForm.value).subscribe(res => {
      this.ngOnInit();
      this._snackBar.open("Text was updated succesfully", 'Okay');
    })
  }

  updateIlianText(){

    this.http.post("http://ludwig-michael22.de:8000/updateText", this.IlianTextForm.value).subscribe(res => {
      this.ngOnInit();
      this._snackBar.open("Text was updated succesfully", 'Okay');
    })
  }

  updateFranziskaText(){

    this.http.post("http://ludwig-michael22.de:8000/updateText", this.FranziskaTextForm.value).subscribe(res => {
      this.ngOnInit();
      this._snackBar.open("Text was updated succesfully", 'Okay');
    })
  }

  updateSophiaText(){

    this.http.post("http://ludwig-michael22.de:8000/updateText", this.SophiaTextForm.value).subscribe(res => {
      this.ngOnInit();
      this._snackBar.open("Text was updated succesfully", 'Okay');
    })
  }

  constructor(private authService:AuthService, private http:HttpClient, private _snackBar: MatSnackBar){
  }
  ngOnInit(): void {
    this.http.get("http://ludwig-michael22.de:8000/getText/TrioText").subscribe(res => {
      this.TrioText = res.toString();
      this.TrioTextForm.patchValue({
        content: this.TrioText
      });
    });
    this.http.get("http://ludwig-michael22.de:8000/getText/IlianText").subscribe(res => {
      this.IlianText = res.toString();
      this.IlianTextForm.patchValue({
        content: this.IlianText
      });
    });
    this.http.get("http://ludwig-michael22.de:8000/getText/FranziskaText").subscribe(res => {
      this.FranziskaText = res.toString();
      this.FranziskaTextForm.patchValue({
        content: this.FranziskaText
      });
    });
    this.http.get("http://ludwig-michael22.de:8000/getText/SophiaText").subscribe(res => {
      this.SophiaText = res.toString();
      this.SophiaTextForm.patchValue({
        content: this.SophiaText
      });
    });
  }
}
