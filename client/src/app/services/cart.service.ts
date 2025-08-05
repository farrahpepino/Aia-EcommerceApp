import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<any[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor() {
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
