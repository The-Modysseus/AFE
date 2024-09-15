import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-temperature',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-temperature.component.html',
  styleUrl: './update-temperature.component.css'
})
export class UpdateTemperatureComponent {
  temperature = 0;

  constructor(readonly messageService: MessageService) {}

  updateTemperature() {
    this.messageService.setTemperature(this.temperature);
  }
}
