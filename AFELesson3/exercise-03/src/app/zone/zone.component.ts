import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-zone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zone.component.html',
  styleUrl: './zone.component.css'
})
export class ZoneComponent {
  likeAngular = true;
  count = signal(0);
  counter: any;

  toggle() {
    this.likeAngular = !this.likeAngular;
  }
 
  startCounter() {
    this.counter = setInterval(() => {
      this.count.set(this.count() + 1);
      console.log( this.count());
    }, 1000);
  }

  stopCounter() {
    clearInterval(this.counter);
  }
}
