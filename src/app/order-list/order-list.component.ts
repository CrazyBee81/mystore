import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Order} from "../models/Order";
import {User} from "../models/User";
import {OrderService} from "../order.service";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  user: User;
  login: boolean = false;
  lastOrders: Order[];

  constructor(private userService: UserService, private orderService: OrderService) {
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
      creditcard: 0,
    }
  }

  ngOnInit(): void {
    // get user
    this.user = this.userService.getUserFromStorage()
    if (this.user !== null) {
      this.login =  true;
    }
    // get orders from user
    this.orderService.showLatestOrders(this.user).subscribe(data => {
      let orders: Order[] = data as Order[];
      this.lastOrders = orders
    })

  }

}
