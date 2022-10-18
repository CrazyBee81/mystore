import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import {Product} from "../models/Product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  component: String = 'list'
  products: Product[] = []
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products  = data;
      console.log(data)
    });
  }
}
