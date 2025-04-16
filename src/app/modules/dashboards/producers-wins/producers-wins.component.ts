import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MoviesService } from '../../../services/movies.service';
import { takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'app-producers-wins',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './producers-wins.component.html',
  styleUrl: './producers-wins.component.scss'
})
export class ProducersWinsComponent {
  public displayedColumns: string[] = ['producer', 'interval', 'previousWin', 'followingWin'];
  public ngUnsubscribe: Subject<void> = new Subject<void>();
  public dataValuesMaximum: ProducersWins[] = [];
  public dataValuesMinimum: ProducersWins[] = [];

  constructor(
    private moviesService: MoviesService
  ){
    this.moviesService.GetIntervalForProducers().pipe(takeUntil(this.ngUnsubscribe)).subscribe({
      next: async (res: any) => {
        if (res.max.length <= 0) {
          this.dataValuesMaximum = [];
        }

        if (res.min.length <= 0) {
          this.dataValuesMinimum = [];
        }

        this.dataValuesMaximum = res.max;
        this.dataValuesMinimum = res.min;
      },
      error: (error: any) => {

      }
    });
  }
}

export interface ProducersWins {
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;
}

