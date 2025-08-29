import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ItemsComponent } from '../../items/items.component';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';
import { SidebarsComponent } from '../../sidebars/sidebars.component';

@Component({
  selector: 'app-hero',
  imports: [SidebarsComponent, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',

})
export class HeroComponent implements AfterViewInit{
  @ViewChild('heroRef') heroElement!: ElementRef<HTMLDivElement>;
  heroReady = false;

  ngAfterViewInit() {
    setTimeout(() => {
      this.heroReady = true;
    });
  }
}
