import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service'
import {Product} from "../models/Product";

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  cartList : Product[]
  total: Number = 0
  component = 'product-cart'
  checkoutData = {
    name: "",
    adress: "",
    creditcard: 0,
  }
  confirmed = false

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartList =  this.cartService.getCart()
    this.total = this.cartService.calcTotal()
  }
  onSubmit(){
    alert('success')
    this.confirmed = true
  }

}
