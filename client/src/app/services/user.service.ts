import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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
    return this.http.post<User>( `${this.api}/register`, user);
  }

  loginUser(user: Partial<User>): Observable<User> {
    return this.http.post<User>(`${this.api}/login`, user);
  }

  

}
