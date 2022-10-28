import {Component, OnInit} from '@angular/core';
import {User} from "../models/User";
import {UserService} from "../user.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: string;
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

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(user: User) {
    this.userService.authenticate(user).subscribe(data => {
      this.token = (data as unknown) as string;
      console.log(this.token)
      if (this.userService.isUser(this.token)) {
        localStorage.setItem('UserToken', this.token);
        this.router.navigate(['/'])
      } else {
        alert(`Login data not correct. Please check your mail and password`)
      }
    });
  }

}
