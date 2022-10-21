import { Component, OnInit } from '@angular/core';
import {SignIn} from "../models/SignIn";
import {UserService} from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signIn: SignIn = {
    mail: "",
    password: "",
  }
  token: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
  }

  onSubmit(signIn: SignIn) {
    console.log(signIn);
    this.userService.authenticate(signIn).subscribe(data => {
      this.token = (data as unknown) as string;
      localStorage.setItem('UserToken', this.token);
      console.log(this.token );
    });
  }

}
