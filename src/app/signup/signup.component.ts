import { Component, OnInit } from '@angular/core';
import {User} from "../models/User";
import {UserService} from "../user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User;
  confirmed = false

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(user: User){
    this.userService.createUser(user).subscribe(data => {
      alert('user created')
    });
  }

}
