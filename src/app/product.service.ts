import { Injectable } from '@angular/core';
import * as data from '../assets/data.json';
import {Product} from './models/Product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = (data as any).default;

  constructor() { }

  getProducts() : Product[] {
    return this.products
  }

  getProduct(id:number) : Product {
    const selectedProd = this.products.filter(product => product.id === id);
    return selectedProd[0]
  }
}
