import { Routes } from '@angular/router';
import { ZoneComponent } from './zone/zone.component';
import { TemperatureComponent } from './temperature/temperature.component';

export const routes: Routes = [
    {path: 'zone', component: ZoneComponent},
    {path: 'temperature', component: TemperatureComponent},
    {path: '', redirectTo: '/zone', pathMatch: 'full'},
  ];