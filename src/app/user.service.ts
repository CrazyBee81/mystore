import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from './models/User'
import {SignIn} from "./models/SignIn";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user:User ) : Observable<[]> {
    return this.http.post<[]>('http://localhost:3001/users', user );
  }

  authenticate(signIn:SignIn ) : Observable<[]> {
    return this.http.post<[]>('http://localhost:3001/user/auth', signIn );
  }
}
