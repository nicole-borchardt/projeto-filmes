import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {Sort, MatSortModule} from '@angular/material/sort';
import { MoviesService } from '../../../services/movies.service';
import { takeUntil, Subject } from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-movies-year',
  standalone: true,
  imports: [MatTableModule,  MatSortModule, FormsModule, MatIcon, MatTooltip, CommonModule],
  templateUrl: './list-movies-year.component.html',
  styleUrl: './list-movies-year.component.scss'
})
export class ListMoviesYearComponent {
  public displayedColumns: string[] = ['id', 'year', 'title'];
  public ngUnsubscribe: Subject<void> = new Subject<void>();
  public dataValues: ListMovies[] = [];
  public year!: number;
  public yearInvalid: boolean = false;

  constructor(
    private moviesService: MoviesService
  ){
    
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
        case 'id':
          return this.compare(a.id, b.id, isAsc);
        case 'title':
          return this.compare(a.title, b.title, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  searchMoviesByYear(){
    this.yearInvalid = false;

    if(this.year <= 0 || !this.year){
      this.yearInvalid = true;
      return;
    }

    this.moviesService.GetListMoviesByYear(this.year).pipe(takeUntil(this.ngUnsubscribe)).subscribe({
      next: async (res: any) => {
        if (res.length <= 0) {
          this.dataValues = [];
          return;
        }

        this.dataValues = res;
      },
      error: (error: any) => {

      }
    });
  }
}

export interface ListMovies {
  id: number;
  year: number;
  title: string;
}

