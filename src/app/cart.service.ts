import {Injectable} from '@angular/core';
import {Product} from "./models/Product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartList: Product[] = []

  constructor(private http: HttpClient) { }

  getCart() {
    return this.cartList;
  }

  calcTotal() {
    let total = 0;
    for (let cartItem of this.cartList) {
      let productPrice = cartItem["price"] * parseInt(String(cartItem["amount"]));
      total = productPrice + total;
    }
    return total
  }

  addToCart(product: Product) {
    let updated = this.updateCart(product)

    if (!updated) {
      this.cartList.push(product);
    }
    this.calcTotal()
    return this.cartList;
  }

  // @ts-ignore
  updateCart(product: Product): boolean {
    let updated = false;
    for (let i in this.cartList) {
      if (this.cartList[i].id === product.id) {
        this.cartList[i] = product
        updated = true
      }
      return updated
    }
  }

  deleteFromCart(product: Product) {
    const newCartList = this.cartList.filter(cartItem => product.id !== cartItem.id);
    this.cartList = newCartList;
    return this.cartList
  }

  clearCart() {
    this.cartList = [];
    return this.cartList;
  }
}
