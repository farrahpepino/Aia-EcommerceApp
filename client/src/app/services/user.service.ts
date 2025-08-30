import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/UserModel';
import { AuthResponse } from '../models/AuthResponse';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private api = "http://localhost:5005"
  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<AuthResponse>{
    return this.http.post<AuthResponse>( `${this.api}/register`, user);
  }

  loginUser(user: Partial<User>): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.api}/login`, user);
  }

  setUser(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  getUser(): string | null {
    if (typeof localStorage !== 'undefined') {
      return JSON.parse(localStorage.getItem('token') || 'null');
    }
    return null;
  }

  isLoggedIn(): boolean {
    return !!this.getUser();
  }

  logout() {
    localStorage.removeItem('token');
  }

}
