import { Routes } from '@angular/router';
import { ClientOverviewComponent } from './client/client-overview/client-overview.component';
import { ClientDetailsComponent } from './client/client-details/client-details.component';

export const routes: Routes = [
    {path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule)},
    {path: "client-overview", component: ClientOverviewComponent},
    {path: "client-details", component: ClientDetailsComponent}
];