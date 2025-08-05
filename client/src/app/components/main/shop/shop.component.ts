import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ItemsComponent } from '../../items/items.component';
import { CommonModule } from '@angular/common';
import { SidebarsComponent } from '../../sidebars/sidebars.component';
@Component({
  selector: 'app-shop',
  imports: [ItemsComponent, SidebarsComponent, CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})

export class ShopComponent  implements AfterViewInit{
  @ViewChild('heroRef') heroElement!: ElementRef<HTMLDivElement>;
  heroReady = false;

  ngAfterViewInit() {
    setTimeout(() => {
      this.heroReady = true;
    });
  }
}