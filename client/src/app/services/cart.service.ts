import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<any[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor(private http: HttpClient) {
    if (typeof window !== 'undefined') {
      const cart = this.getCart(); 
      this.cartSubject.next(cart);
    }
  }

  getCart(): any[] {
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  updateCart(newCart: any[]) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
    this.cartSubject.next(newCart);
  }

  addToCart(product: any, size: string, quantity: number) {
    const cart = this.getCart();
    
    const index = cart.findIndex(
      (existingItem: any) => existingItem.itemId === product.itemId && existingItem.size === size 
    );

    if (index !== -1) {
      cart[index].quantity += quantity;
    } else {
      cart.push({ ...product, size, quantity });
    }

    this.updateCart(cart);
  }

  removeFromCart(itemId: number, size: string) {
    const cart = this.getCart().filter(
      item => !(item.itemId === itemId && item.size === size)
    );
    this.updateCart(cart);
  }
  
  increaseQuantity(itemId: number, size: string){
    const cart = this.getCart();
    const index = cart.findIndex(
      (item) => item.itemId === itemId && item.size === size
    );
    
    cart[index].quantity += 1;
    this.updateCart(cart);
  }

  decreaseQuantity(itemId: number, size: string){
    const cart = this.getCart();
    const index = cart.findIndex(
      (item) => item.itemId === itemId && item.size === size
    );
    
    cart[index].quantity -= 1;
    this.updateCart(cart);
  }

  getTotaQuantity(): number{
    if(typeof window === 'undefined') return 0;
    const cart = this.getCart();
    return cart.reduce((total: number, item:any)=> total + (item.quantity || 0), 0 )
  }

  getOrderTotal(): number{
    if(typeof window === 'undefined') return 0;
    const cart = this.getCart();

    return cart.reduce((total: number, item: any) => {
      return total + (item.quantity * item.itemPrice);  
    }, 0);
  }
}
