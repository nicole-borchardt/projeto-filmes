import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {Sort, MatSortModule} from '@angular/material/sort';
import { MoviesService } from '../../../services/movies.service';
import { takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'app-years-multiple-winners',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './years-multiple-winners.component.html',
  styleUrl: './years-multiple-winners.component.scss'
})
export class YearsMultipleWinnersComponent {
  public displayedColumns: string[] = ['year', 'winnerCount'];
  public ngUnsubscribe: Subject<void> = new Subject<void>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public dataValues: MultipleWinners[] = [];

  constructor(
    private moviesService: MoviesService
  ){
    this.moviesService.GetYearsWithMultipleWinners().pipe(takeUntil(this.ngUnsubscribe)).subscribe({
      next: async (res: any) => {
        if (res.years.length <= 0) {
          this.dataValues = [];
          return;
        }

        this.dataValues = res.years;
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
        case 'year':
          return this.compare(a.year, b.year, isAsc);
        case 'winnerCount':
          return this.compare(a.winnerCount, b.winnerCount, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number, b: number, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}

export interface MultipleWinners {
  winnerCount: number;
  year: number;
}

