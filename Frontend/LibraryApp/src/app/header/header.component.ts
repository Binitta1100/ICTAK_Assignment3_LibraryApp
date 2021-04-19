import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:String='LibraryApp'
  constructor(public _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  logoutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['/']);
  }
}
