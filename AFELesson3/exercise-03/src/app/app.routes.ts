import { Routes } from '@angular/router';
import { ZoneComponent } from './zone/zone.component';

export const routes: Routes = [
    {path: 'zone', component: ZoneComponent},
    {path: '', redirectTo: '/zone', pathMatch: 'full'},
  ];