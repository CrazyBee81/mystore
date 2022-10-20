import { Injectable } from '@angular/core';
import * as data from '../assets/data.json';
import {Product} from './models/Product'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = (data as any).default;

  constructor(private http: HttpClient) { }

  getProducts() : Observable<[]> {
    return this.http.get<[]>('http://localhost:3000/products');
  }

  getProduct(id:number) : Product {
    const selectedProd = this.products.filter(product => product.id === id);
    return selectedProd[0]
  }
}
