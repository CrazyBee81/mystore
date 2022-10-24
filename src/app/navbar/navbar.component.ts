import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../models/User";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User = {
    id: 0,
    firstname: "",
    lastname: "",
    password: "",
    mail: "",
    address: "",
    city: "",
    zipCode: 0,
    state: "",
    creditcard: 0,
  }
  login: boolean = false;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = this.userService.getUserFromStorage()
    if (this.user !== null) {
      this.login =  true;
    }
  }

  logout() {
    this.userService.deleteUserData()
    this.user = {
      id: 0,
      firstname: "",
      lastname: "",
      password: "",
      mail: "",
      address: "",
      city: "",
      zipCode: 0,
      state: "",
      creditcard: 0
    }
    this.login = false;
  }
}
