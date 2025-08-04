import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HeroComponent } from './components/main/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegisterComponent, LoginComponent, HeroComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
