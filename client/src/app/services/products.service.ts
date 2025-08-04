import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Product {
  itemId: number;
  itemBrand: string;
  itemName: string;
  itemSKU: string;
  imagePath: string;
  itemPrice: number;
  color: string;
  itemSizes: string[];
}
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
