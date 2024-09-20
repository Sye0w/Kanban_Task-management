import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path:'dashboard/:id',
    loadComponent: () =>
    import('../app/views/dashboard-view/dashboard-view.component')
    .then(m => m.DashboardViewComponent)
  },
  {
    path: '',
    redirectTo: '/dashboard/default',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo: '/dashboard/default'
  }
];
