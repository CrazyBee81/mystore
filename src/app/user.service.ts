import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user:User ) : Observable<[]> {
    const data =
    return this.http.post<[]>('http://localhost:3000/users', );
  }
}
