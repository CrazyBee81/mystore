import {Component, OnInit, Input} from '@angular/core';
import {Product} from "../models/Product";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() component: String;
  @Input() product: Product;

  constructor(private cartService: CartService) {
    this.product = {
      id: 0,
      description: "",
      price: 0,
      amount: 0,
      name: "",
      url: ""
    }
    this.component = ''
  }


  ngOnInit(): void {
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product)
    alert('product added to cart')
  }
  updateCart(product: Product): void {
    this.cartService.updateCart(product)
  }

}
