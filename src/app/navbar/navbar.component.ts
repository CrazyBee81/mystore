import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../models/User";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = this.userService.getUserData()
  }

}
