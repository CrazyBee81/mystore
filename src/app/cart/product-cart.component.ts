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

  onSubmit() {
    alert('success')
    this.confirmed = true
  }

  updateCart(product: Product): void {
    this.cartService.updateCart(product)
    this.cartService.calcTotal()
  }

  onDelete(product: Product) {
    this.cartList = this.cartService.deleteFromCart(product)
    alert(`${product.name} has been removed`)
  }
}
