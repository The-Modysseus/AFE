import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-zone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zone.component.html',
  styleUrl: './zone.component.css'
})
export class ZoneComponent {
  likeAngular = true;
  count = 0;
  counter: any;

  toggle() {
    this.likeAngular = !this.likeAngular;
  }
 
  startCounter() {
    this.counter = setInterval(() => {
      console.log(this.count++);
    }, 1000);
  }

  stopCounter() {
    clearInterval(this.counter);
  }
}
