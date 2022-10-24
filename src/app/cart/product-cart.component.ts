import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service'
import {Product} from "../models/Product";
import {User} from "../models/User";
import {UserService} from "../user.service";

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  cartList: Product[]
  total: Number = 0
  component = 'product-cart'
  deliveryOptions = {
    standard: 5,
    fast: 10,
    sameDay: 15
  }
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
    creditcard: 0
  }
  confirmed = false

  constructor(private cartService: CartService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.cartList = this.cartService.getCart()
    this.total = this.cartService.calcTotal()
    this.user = this.userService.getUserFromStorage()
  }

  onChangeDelivery() {
    alert('success')
    this.confirmed = true
  }

  countUp(product: Product): void {
    product.amount = parseInt(String(product.amount)) + 1;
    this.cartService.updateCart(product)
    this.cartList = this.cartService.getCart()
    this.total = this.cartService.calcTotal()
  }

  countDown(product: Product): void {
    if (product.amount > 1) {
      product.amount = product.amount - 1;
      this.cartService.updateCart(product)
      this.cartList = this.cartService.getCart()
      this.total = this.cartService.calcTotal()
    } else {
      this.onDelete(product)
    }
  }

  onDelete(product: Product) {
    this.cartList = this.cartService.deleteFromCart(product)
    alert(`${product.name} has been removed`)
  }
}
