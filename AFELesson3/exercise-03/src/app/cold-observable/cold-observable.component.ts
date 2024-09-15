import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { filter, map, of, take, tap } from 'rxjs';

@Component({
  selector: 'app-cold-observable',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './cold-observable.component.html',
  styleUrl: './cold-observable.component.css'
})
export class ColdObservableComponent {
  coldObservable$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  result$ = this.coldObservable$.pipe(
    filter((value) => value % 2 === 1),
    map((value) => value * 25),
    take(3),
    tap((value) => console.log('Value:', value))
  );
}
