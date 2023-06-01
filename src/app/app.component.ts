import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TrioMorpheskApp';
  auth(){
    return this.authService.authorized;
  }

  exitAdmin(){
    this.authService.authorized = false;
    console.log(this.authService.authorized);
  }
  constructor(private authService: AuthService){

  }
}
