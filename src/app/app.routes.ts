import { Routes } from '@angular/router';
import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';

export const routes: Routes = [
  {
    path:'dashboard/:title',
    loadComponent: () =>
    import('../app/views/dashboard-view/dashboard-view.component')
    .then(m => m.DashboardViewComponent)
  },
  {
    path:'**',
    component: DashboardViewComponent
  }
];
