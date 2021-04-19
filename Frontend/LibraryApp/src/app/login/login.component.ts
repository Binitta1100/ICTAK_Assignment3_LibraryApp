import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserModel } from '../signup/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title:String ="Login";
  user = new UserModel( null, null, null);

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    localStorage.setItem("UserEmail", this.user.email);
    this._auth.loginUser(this.user)
    .subscribe(res=>{
      localStorage.setItem('token', res.token);
      sessionStorage.setItem("user", this.user.email);
      this._router.navigate(['books'])
    });
  }
}
