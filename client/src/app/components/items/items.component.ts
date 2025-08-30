import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/ProductModel';
@Component({
  selector: 'app-items',
  imports: [CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
 

  constructor(private ProductsService: ProductsService, private CartService: CartService){}
  products: any;

 
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.ProductsService.getProducts().subscribe(
      (data) => { 
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  
  handleSubmit(product: Product, size: string, quantity: number) {
    this.CartService.addToCart(product, size, quantity);
  }


}
