import { Injectable } from '@angular/core';
import {Product} from "./models/Product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = []

  constructor() {
  }

  getCart() {
    return this.cart;
  }

  addToCart(product:Product) {
    this.cart.push(product);

  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }
}
