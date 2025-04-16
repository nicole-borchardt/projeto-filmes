import { Component, ViewChild } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {Sort, MatSortModule} from '@angular/material/sort';
import { MoviesService } from '../../../services/movies.service';
import { takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'app-top-studio-winners',
  standalone: true,
  imports: [MatTableModule, MatSortModule],
  templateUrl: './top-studio-winners.component.html',
  styleUrl: './top-studio-winners.component.scss'
})
export class TopStudioWinnersComponent {
  public displayedColumns: string[] = ['name', 'winCount'];
  public ngUnsubscribe: Subject<void> = new Subject<void>();
  public dataValues: StudioWinners[] = [];

  constructor(
    private moviesService: MoviesService
  ){
    this.moviesService.GetStudiosWithWinCount().pipe(takeUntil(this.ngUnsubscribe)).subscribe({
      next: async (res: any) => {
        if (res.studios.length <= 0) {
          this.dataValues = [];
          return;
        }

        //garante que estará na ordenação correta do top 3.
        this.dataValues = res.studios
                          .sort((a: StudioWinners, b: StudioWinners) =>  b.winCount - a.winCount)
                          .slice(0,3);
      },
      error: (error: any) => {

      }
    });
  }

  sortData(sort: Sort) {
    const data = this.dataValues.slice();
    if (!sort.active || sort.direction === '') {
      this.dataValues = data;
      return;
    }

    this.dataValues = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return this.compare(a.name, b.name, isAsc);
        case 'winCount':
          return this.compare(a.winCount, b.winCount, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}

export interface StudioWinners {
  winCount: number;
  name: string;
}

