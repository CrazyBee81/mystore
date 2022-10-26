import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "./models/User";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  token = ""
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo3LCJ1c2VybmFtZSI6InRlc3Q0IiwicGFzc3dvcmRfZGlnZXN0IjoiJDJiJDEwJE9iL1kzMWo0cnBvbEhJU2N1S2gueE9FRnpUdUtzcjZ4MGFkSnI4VmFBMzI2N3VSRm85bjJpIn0sImlhdCI6MTY0NjA2MTYzN30.VtaarAXVrViQYciqUmLocet9nqPnrJipqW54P-LOMyY'
    })
  };

    constructor(private http: HttpClient) {
  }

  createOrder(user: User): Observable<[]> {
    this.token = localStorage.getItem('UserToken');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `Bearer ${this.token}`
      })
    };

    return this.http.post<[]>(`http://localhost:3000/user/${user.id}/orders`, {"status": "open"}, httpOptions);
  }
}
