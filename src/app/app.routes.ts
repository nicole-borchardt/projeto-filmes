import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { DashboardsComponent } from './modules/dashboards/dashboards.component';

export const routes: Routes = [
    {
        path : '',
        component: HomeComponent,
        title: 'Página Inicial',
        children: [
            {
              path: 'dashboards',
              component: DashboardsComponent
            }
        ]
    }
];
