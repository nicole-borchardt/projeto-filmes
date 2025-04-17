import { Component } from '@angular/core';
import { YearsMultipleWinnersComponent } from './years-multiple-winners/years-multiple-winners.component';
import { TopStudioWinnersComponent } from './top-studio-winners/top-studio-winners.component';
import { ProducersWinsComponent } from './producers-wins/producers-wins.component';
import { ListMoviesYearComponent } from './list-movies-year/list-movies-year.component';

@Component({
  selector: 'app-dashboards',
  standalone: true,
  imports: [YearsMultipleWinnersComponent, TopStudioWinnersComponent, ProducersWinsComponent, ListMoviesYearComponent],
  templateUrl: './dashboards.component.html',
  styleUrl: './dashboards.component.scss' 
})
export class DashboardsComponent {

}
