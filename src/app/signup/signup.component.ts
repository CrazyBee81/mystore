import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userData = {
    firstname: "",
    lastname: "",
    mail: "",
    password: "",
    adress: "",
    city: "",
    zipCode: "",
    state: "",
    creditcard: 0,
  }
  confirmed = false

  constructor() { }

  ngOnInit(): void {
  }

}
