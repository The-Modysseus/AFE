import { Component } from '@angular/core';
import { ColdObservableComponent } from '../cold-observable/cold-observable.component';
import { HotObservableComponent } from '../hot-observable/hot-observable.component';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [ColdObservableComponent, HotObservableComponent],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent {

}
