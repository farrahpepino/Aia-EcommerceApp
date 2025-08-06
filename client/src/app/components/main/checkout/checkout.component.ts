import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CommonModule, Location } from '@angular/common';
@Component({
  selector: 'app-checkout',
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  constructor(private CartService: CartService, private Location: Location){}

  items: any[] = [];
  totalQuantity: number = 0;
  totalCost: number = 0;

  ngOnInit(): void {
    this.CartService.cart$.subscribe(cart => {
      this.items = cart;
      this.totalQuantity = this.CartService.getTotaQuantity();
      this.totalCost = this.CartService.getOrderTotal();
    });

  }

  goBack(){
    this.Location.back();
  }

}
