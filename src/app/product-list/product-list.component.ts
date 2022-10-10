import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import {Product} from "../models/Product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = []
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }


}
