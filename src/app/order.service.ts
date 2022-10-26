import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "./models/User";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  createOrder(user: User): Observable<[]> {
    const token = localStorage.getItem('UserToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    };

    return this.http.post<[]>(`http://localhost:3000/user/${user.id}/orders`, {"status": "open"}, httpOptions);
  }
}
