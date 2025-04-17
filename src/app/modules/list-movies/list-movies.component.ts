import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PageEvent } from '@angular/material/paginator';
import { takeUntil, Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [FormsModule, MatTableModule, MatPaginator],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.scss'
})
export class ListMoviesComponent {
  public dataValues: any[] = [];
  public displayedColumns: string[] = ['id', 'year', 'title', 'winner'];
  public ngUnsubscribe: Subject<void> = new Subject<void>();

  public filterYear: string = '';
  public filterWinner?: boolean | string = '';

  public pageSize:number = 10;
  public totalItems:number = 0;
  public currentPage:number = 0;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    const filters = {
      year: this.filterYear,
      winner: this.filterWinner,
      page: this.currentPage,
      size: this.pageSize
    };

    this.moviesService.GetMovies(filters).pipe(takeUntil(this.ngUnsubscribe)).subscribe({
      next: async (res: any) => {
        if (res.content.length <= 0) {
          this.dataValues = [];
          return;
        }

        this.dataValues = res.content;

        this.pageSize = res.pageable.pageSize;
        this.currentPage = res.pageable.pageNumber;
        this.totalItems = res.totalElements;
      },
      error: (error: any) => {

      }
    });
  }

  onFilterChange() {
    this.currentPage = 0; 
    this.getMovies();
  }

  onPageChange(event: PageEvent) {
    console.info(event);

    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.getMovies();
  }

}
