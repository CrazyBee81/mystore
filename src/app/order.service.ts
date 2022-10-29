import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "./models/User";
import {Order} from "./models/Order";
import {Product} from "./models/Product";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  token = ""
  httpOptions = {
    headers: {}
  };
  constructor(private http: HttpClient) {
  }

  createOrder(user:User): Observable<unknown> {
    this.token = localStorage.getItem('UserToken');
    this.httpOptions.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`
    })

    return this.http.post<Order>(`http://localhost:3000/user/${user.id}/orders`, {"status": "open"}, this.httpOptions)
  }


  addProducts(order: Order, product: Product): Observable<[]> {
    this.token = localStorage.getItem('UserToken');
    this.httpOptions.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`
    })

    return this.http.post<[]>(`http://localhost:3000/order/${order.id}/products/`, {
      "product_id": product.id,
      "quantity": product.amount,
      "order_id": order.id
    }, this.httpOptions);
  }

  showLatestOrders(user): Observable<[]> {
    this.token = localStorage.getItem('UserToken');
    this.httpOptions.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`
    })

    return this.http.get<[]>(`http://localhost:3000/user/${user.id}/orders`, this.httpOptions);
  }

  getProducts(order: Order): Observable<[]> {
    this.token = localStorage.getItem('UserToken');
    this.httpOptions.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`
    })

    return this.http.get<[]>(`http://localhost:3000/order/${order.id}/products/`, this.httpOptions);
  }
}
