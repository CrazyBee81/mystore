import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from "../models/Product";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product: Product;
  @Output() deleted = new EventEmitter;
  @Output() countUp = new EventEmitter;
  @Output() countDown = new EventEmitter;

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
}
