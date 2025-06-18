import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoodboardComponent } from './components/moodboard/moodboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MoodboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
