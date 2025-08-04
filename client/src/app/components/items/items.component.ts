import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../../services/products.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-items',
  imports: [ CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
 
  showSizes = false;

  constructor(private ProductsService: ProductsService, ){}
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
  
}
