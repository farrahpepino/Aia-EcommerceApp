import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { Product } from '../../../models/ProductModel';
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  items: Product[] = [];
  totalQuantity: number = 0;
  totalCost: number = 0;
  dropinInstance: any;
  router = inject(Router);

  constructor(
    private CartService: CartService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.CartService.cart$.subscribe(cart => {
      this.items = cart;
      this.totalQuantity = this.CartService.getTotaQuantity();
      this.totalCost = this.CartService.getOrderTotal();
    });
  }


  goBack(): void {
    this.location.back();
  }

  payNow(){
    this.CartService.order(this.items, this.totalQuantity, this.totalCost);
    this.router.navigate(['/home'])
  }
}
