import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'builder',
    pathMatch: 'full'
  },
  {
    path: 'builder',
    loadChildren: async () => (await import('./pages/builder')).routes
  }
];
