import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from "../models/Product";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() up = new EventEmitter();
  @Output() down = new EventEmitter();

  constructor(private cartService: CartService) {
    this.product = {
      id: 0,
      description: "",
      price: 0,
      amount: 0,
      name: "",
      url: ""
    }
  }


  ngOnInit(): void {
  }

  addToCart(product: any) : void {
    this.cartService.addToCart(product)
  }

}
