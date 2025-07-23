import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { ItemsComponent } from '../items/items.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebars',
  imports: [ItemsComponent, RouterLink],
  standalone: true,
  templateUrl: './sidebars.component.html',
  styleUrl: './sidebars.component.css'
})
export class SidebarsComponent  {
  menuActive = false;
  cartActive = false;
  constructor(private router: Router) {}
  @ViewChild('cartRef') cartElement!: ElementRef<HTMLElement>;
  @ViewChild('menuRef') menuElement!: ElementRef<HTMLElement>;
  @Input() heroRef!: ElementRef<HTMLElement>;

 


 
  
  goToLogin() {
    this.router.navigate(['/login']);
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
    if (this.menuElement) {
      this.menuElement.nativeElement.style.visibility = this.menuActive ? 'visible' : 'hidden';
      this.heroRef.nativeElement.style.filter = this.menuActive ? 'blur(5px)' : 'none';
      this.heroRef.nativeElement.style.pointerEvents =  this.menuActive ? 'none' : 'auto';
      this.heroRef.nativeElement.style.overflow =  this.menuActive ? 'hidden' : 'auto';
      this.heroRef.nativeElement.style.position =  this.menuActive ? 'fixed' : 'relative';
      this.menuElement.nativeElement.style.filter = '';

    }
  }

  toggleCart() {

    this.cartActive = !this.cartActive;
    if (this.cartElement) {
      this.cartElement.nativeElement.style.visibility = this.cartActive ? 'visible' : 'hidden';
      this.heroRef.nativeElement.style.filter =  this.cartActive ? 'blur(5px)' : 'none';
      this.heroRef.nativeElement.style.pointerEvents =  this.cartActive ? 'none' : 'auto';
      this.heroRef.nativeElement.style.overflow =  this.cartActive ? 'hidden' : 'auto';
      this.heroRef.nativeElement.style.position =  this.cartActive ? 'fixed' : 'relative';
      this.cartElement.nativeElement.style.filter = '';
    }

  }
}
