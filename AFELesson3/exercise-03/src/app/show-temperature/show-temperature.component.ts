import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-show-temperature',
  standalone: true,
  imports: [],
  templateUrl: './show-temperature.component.html',
  styleUrl: './show-temperature.component.css'
})
export class ShowTemperatureComponent {
  constructor(public messageService: MessageService) { }
}
