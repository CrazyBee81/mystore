import {Component, OnInit, Input} from '@angular/core';
import {User} from "../models/User";
import {UserService} from "../user.service";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  @Input() user: User

  constructor(private userService: UserService) {
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
  }

  ngOnInit(): void {
    this.user = this.userService.getUserFromStorage()
  }

}
