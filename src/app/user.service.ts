import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from './models/User'
import {SignIn} from "./models/SignIn";
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user:User ) : Observable<[]> {
    return this.http.post<[]>('http://localhost:3000/users', user );
  }

  authenticate(signIn:SignIn ) : Observable<[]> {
    return this.http.post<[]>('http://localhost:3000/user/auth', signIn );
  }

  getUserData() {
    const UserToken = localStorage.getItem('UserToken');
    const user: User = jwt_decode(UserToken);
    return user;
  }
}
