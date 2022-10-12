import {Component, OnInit, Input} from '@angular/core';
import {Product} from "../models/Product";
import {CartService} from "../cart.service";
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  selectedId: number;

  constructor(private cartService: CartService, private route: ActivatedRoute, private productService: ProductService) {
    this.selectedId = 0;
    this.product = {
      id: 0,
      description: "",
      price: 0,
      amount: 0,
      name: "",
      url: ""
    }
  }

  ngOnInit() : void{
    this.route.params.subscribe(params => {
      this.selectedId = parseInt(params['id']);
      this.product = this.productService.getProduct(this.selectedId)
      console.log(params)
    });

  }

  addToCart(product: any): void {
    this.cartService.addToCart(product)
  }
}
