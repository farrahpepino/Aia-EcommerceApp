import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoodboardComponent } from './components/moodboard/moodboard.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegisterComponent, LoginComponent, MoodboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
