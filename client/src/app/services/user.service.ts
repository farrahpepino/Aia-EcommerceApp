import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface User{
  id: string,
  email: string,
  password: string,
  username: string
}
@Injectable({
  providedIn: 'root'
})

export class UserService {
  private api = "http://localhost:5005"
  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<User>{
    return this.http.post<User>( `${this.api}/register`, user).pipe(
      tap(user => 
      {
      this.setUser(user);
      }
      )  
    );
  }

  loginUser(user: Partial<User>): Observable<User> {

    return this.http.post<User>(`${this.api}/login`, user).pipe(
      tap(user => 
      {
        this.setUser(user);
      }
      )  
    );

  }

  setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): User | null {
    if (typeof localStorage !== 'undefined') {
      return JSON.parse(localStorage.getItem('user') || 'null');
    }
    return null;
    // const userJson = localStorage.getItem('user');
    // return userJson ? JSON.parse(userJson) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getUser();
  }

  logout() {
    localStorage.removeItem('user');
  }

}
