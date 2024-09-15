import { Routes } from '@angular/router';
import { ZoneComponent } from './zone/zone.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { RxjsComponent } from './rxjs/rxjs.component';

export const routes: Routes = [
    {path: 'zone', component: ZoneComponent},
    {path: 'temperature', component: TemperatureComponent},
    {path: 'rxjs', component: RxjsComponent},
    {path: '', redirectTo: '/zone', pathMatch: 'full'},
  ];