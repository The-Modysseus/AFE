import { Component } from '@angular/core';
import { ShowTemperatureComponent } from '../show-temperature/show-temperature.component';
import { UpdateTemperatureComponent } from '../update-temperature/update-temperature.component';

@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [ShowTemperatureComponent, UpdateTemperatureComponent],
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.css'
})
export class TemperatureComponent {

}
