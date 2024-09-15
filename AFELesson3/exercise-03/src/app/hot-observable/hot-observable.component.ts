import { Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common'
import { fromEvent, map, tap } from 'rxjs';


@Component({
  selector: 'app-hot-observable',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './hot-observable.component.html',
  styleUrl: './hot-observable.component.css'
})
export class HotObservableComponent {
  readonly mouseMoves$ = fromEvent<MouseEvent>(document, 'mousemove');
  readonly xPosition$ = this.mouseMoves$.pipe(
    map((event) => event.clientX)
  ).subscribe((x) => console.log('X:', x));
}
