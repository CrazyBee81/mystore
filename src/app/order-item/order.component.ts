import { Component, OnInit, Input } from '@angular/core';
import {OrderService} from "../order.service";
import {Product} from "../models/Product";
import {Order} from "../models/Order";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  productList: Product[]
  @Input() orderItem: Order

  constructor(private orderService: OrderService) {
    this.orderItem = {
      id: 0,
      user_id: "",
      status: "",
    }
  }

  ngOnInit(): void {
    this.orderService.getProducts(this.orderItem).subscribe(data => {
      let productList = data as Product[]
      this.productList = productList
    })
  }

}
