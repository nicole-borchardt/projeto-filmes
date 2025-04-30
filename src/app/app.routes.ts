import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { DashboardsComponent } from './modules/dashboards/dashboards.component';
import { ListMoviesComponent } from './modules/list-movies/list-movies.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'dashboards', 
        pathMatch: 'full' 
    },{
        path : '',
        component: HomeComponent,
        title: 'Página Inicial',
        children: [{
            path: 'dashboards',
            component: DashboardsComponent
        },{
            path: 'list-movies',
            component: ListMoviesComponent
        }]
    }
];
