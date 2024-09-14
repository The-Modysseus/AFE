import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ZoneComponent } from './zone/zone.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ZoneComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exercise-03';
}
