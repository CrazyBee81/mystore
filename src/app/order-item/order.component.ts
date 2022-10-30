import {Component, OnInit, Input} from '@angular/core';
import {OrderService} from "../order.service";
import {Product} from "../models/Product";
import {Order} from "../models/Order";
import {User} from "../models/User";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  productList: Product[]
  @Input() user: User
  @Input() orderItem: Order

  constructor(private orderService: OrderService) {
    this.orderItem = {
      id: 0,
      user_id: "",
      status: "",
      total: 0,
      shipping: 0,
    }
    this.productList = []
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

    this.orderService.getProducts(this.orderItem).subscribe((data) => {
      for (let orderProduct of data) {
        let product: Product = {
          id: orderProduct.product_id,
          name: orderProduct.name,
          price: orderProduct.price,
          amount: orderProduct.quantity,
          url: orderProduct.url,
          description: orderProduct.description
        }
        this.productList.push(product)
      }
    })
  }

}
