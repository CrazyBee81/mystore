import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service'
import {Product} from "../models/Product";
import {User} from "../models/User";
import {Order} from "../models/Order";
import {UserService} from "../user.service";
import {OrderService} from "../order.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  component = 'product-cart'
  cartList: Product[]
  ItemsTotal: number = 0
  DeliveryTotal: number = 0
  deliveryOptions = [{"text": "Standard-Delivery- $5 ", "value": 5}, {
    "text": "Fast-Delivery- $10",
    "value": 10
  }, {"text": "Same-Day-Delivery- $15", "value": 15}]
  selectedOption = 5
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
  empty = true

  constructor(private cartService: CartService, private userService: UserService, private orderService: OrderService, private router: Router) {
  }

  ngOnInit(): void {
    this.cartList = this.cartService.getCart()
    if (this.cartList.length > 0) {
      this.empty = false
      this.ItemsTotal = this.cartService.calcTotal()
      this.DeliveryTotal = this.ItemsTotal + this.selectedOption;
      this.user = this.userService.getUserFromStorage()
    }
  }

  countUp(product: Product): void {
    product.amount = parseInt(String(product.amount)) + 1;
    this.cartService.updateCart(product)
    this.cartList = this.cartService.getCart()
    this.ItemsTotal = this.cartService.calcTotal()
    this.DeliveryTotal = this.ItemsTotal + this.selectedOption;
  }

  countDown(product: Product): void {
    if (product.amount > 1) {
      product.amount = product.amount - 1;
      this.cartService.updateCart(product)
      this.cartList = this.cartService.getCart()
      this.ItemsTotal = this.cartService.calcTotal()
      this.DeliveryTotal = this.ItemsTotal + this.selectedOption;
    } else {
      this.onDelete(product)
    }
  }

  onDelete(product: Product): void {
    this.cartList = this.cartService.deleteFromCart(product)
    alert(`${product.name} has been removed`)
  }

  onChangeDelivery(newOption: number): void {
    this.selectedOption = newOption;
    this.DeliveryTotal = this.ItemsTotal + this.selectedOption;
  }

  createOrder(user: User): void {
    this.orderService.createOrder(user).subscribe(data => {
      let order: Order = data as Order;
      for (let cartItem of this.cartList) {
        this.orderService.addProducts(order, cartItem).subscribe(data => {
          console.log(`added ${data}`)
        })
      }
      // clear cartlist and reroute
      this.cartList = this.cartService.clearCart()
      this.empty = true
      this.router.navigate(['/confirmation'])

    })
  }
}
