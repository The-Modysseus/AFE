import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private temperatureSignal = signal(0);
  readonly derivedTemperature = this.temperatureSignal.asReadonly();

  setTemperature(temp: number) {
    if (0 <= temp || temp <= 100) {
      this.temperatureSignal.set(temp);
    }
     else { throw new Error('Temperature must be between 0 and 100'); }    
  }
}
