import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUser(user:any){
    return this.http.post<any>("http://localhost:3000/login",user);
  }

  constructor(private http:HttpClient) { }
  rolesVerify(){
    let admin=sessionStorage.getItem('user');
    if(admin==='admin@gmail.com'){
      return true;
    }
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
