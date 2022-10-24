import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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
  @Output() added = new EventEmitter()

  constructor(private cartService: CartService) {
    this.product = {
      id: 0,
      description: "",
      price: 0,
      amount: 1,
      name: "",
      url: ""
    }
    this.component = ''
  }


  ngOnInit(): void {
  }

  updateCart(product: Product): void {
    this.cartService.updateCart(product)
  }

}
