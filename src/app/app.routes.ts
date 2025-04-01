import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/layouts/default/default.component').then((m) => m.DefaultComponent)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];
