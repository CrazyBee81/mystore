import {Injectable} from '@angular/core';
import {Product} from "./models/Product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartList: Product[] = []

  constructor() {
  }

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
        break;
      }
      return updated
    }
  }

  clearCart() {
    this.cartList = [];
    return this.cartList;
  }
}
