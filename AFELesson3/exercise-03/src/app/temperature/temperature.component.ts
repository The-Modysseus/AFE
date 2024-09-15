import { Component } from '@angular/core';
import { ShowTemperatureComponent } from '../show-temperature/show-temperature.component';

@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [ShowTemperatureComponent],
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.css'
})
export class TemperatureComponent {

}
