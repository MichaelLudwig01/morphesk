import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authorized:boolean = false;

  getAutherized(){
    return this.authorized
  }

  setAutherized(inp:boolean){
    this.authorized = inp;
  }
}
