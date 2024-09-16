import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule)},
];