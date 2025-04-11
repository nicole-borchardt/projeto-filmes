import { Component } from '@angular/core';
import { YearsMultipleWinnersComponent } from './years-multiple-winners/years-multiple-winners.component';

@Component({
  selector: 'app-dashboards',
  standalone: true,
  imports: [YearsMultipleWinnersComponent],
  templateUrl: './dashboards.component.html',
  styleUrl: './dashboards.component.scss'
})
export class DashboardsComponent {

}
