import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private api = "http://localhost:5005"

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get( `${this.api}/products`);
  }

}
