import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './models/User'
import {Router} from '@angular/router';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) {
  }

  createUser(user: User): Observable<[]> {
    return this.http.post<[]>('http://localhost:3000/users', user);
  }

  authenticate(user: User): Observable<[]> {
    return this.http.post<[]>('http://localhost:3000/user/auth', user);
  }

  isUser(UserToken) {
    const decoded = jwt_decode(UserToken);
    return decoded !== null;
  }

  getUserFromStorage(): User | null {
    const UserToken = localStorage.getItem('UserToken');
    if (this.isUser(UserToken)) {
      const user: User = jwt_decode(UserToken);
      return user;
    }
    return null
  }

  deleteUserData(): void {
    localStorage.removeItem('UserToken')
    this.router.navigate(['/'])
  }
}
