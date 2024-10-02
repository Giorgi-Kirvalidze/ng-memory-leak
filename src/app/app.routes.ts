import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then(
          m => m.HomeComponent
      ),
  },
    {
        path: 'page1',
        loadComponent: () =>
          import(
            './page1/page1.component'
            ).then((c) => c.Page1Component),
      },
      {
        path: 'page2',
        loadComponent: () =>
          import(
            './page2/page2.component'
            ).then((c) => c.Page2Component),
      },
];
