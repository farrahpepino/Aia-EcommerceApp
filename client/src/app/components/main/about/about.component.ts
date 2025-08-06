import { Component } from '@angular/core';
import { SidebarsComponent } from '../../sidebars/sidebars.component';
import { ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [SidebarsComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @ViewChild('heroRef') heroElement!: ElementRef<HTMLDivElement>;
  heroReady = false;

  ngAfterViewInit() {
    setTimeout(() => {
      this.heroReady = true;
    });
  }
}
