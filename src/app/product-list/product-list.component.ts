import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import {Product} from "../models/Product";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  component: String = 'list'
  products: Product[] = []
  constructor(private productService: ProductService, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products  = data;
      console.log(data)
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product)
    alert('product added to cart')
  }
}
