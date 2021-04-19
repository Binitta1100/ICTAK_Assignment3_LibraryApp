import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from './user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title = "Signup";
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  user = new UserModel( null, null, null);

  userVerify(){
    this.userService.newUser(this.user);
    alert("Success");
    this.router.navigate(['login']);
  }
}
