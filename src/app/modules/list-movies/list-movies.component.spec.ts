import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListMoviesComponent } from './list-movies.component';
import { MoviesService } from '../../services/movies.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ListMoviesComponent', () => {
  let component: ListMoviesComponent;
  let fixture: ComponentFixture<ListMoviesComponent>;
  let moviesService: jasmine.SpyObj<MoviesService>;

  const mockResponse = {
    content: [
      { id: 1, year: 1990, title: 'Movie 1', winner: true },
      { id: 2, year: 1991, title: 'Movie 2', winner: false }
    ],
    pageable: {
      pageSize: 10,
      pageNumber: 0
    },
    totalElements: 2
  };

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('MoviesService', ['GetMovies']);

    await TestBed.configureTestingModule({
      imports: [
        ListMoviesComponent,
        HttpClientTestingModule,
        FormsModule,
        MatTableModule,
        MatPaginatorModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: MoviesService, useValue: spy }
      ]
    }).compileComponents();

    moviesService = TestBed.inject(MoviesService) as jasmine.SpyObj<MoviesService>;
    moviesService.GetMovies.and.returnValue(of(mockResponse));

    fixture = TestBed.createComponent(ListMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load movies on init', () => {
    expect(component.dataValues.length).toBe(2);
    expect(component.totalItems).toBe(2);
  });

  it('should call getMovies on page change', () => {
    const spy = spyOn(component, 'getMovies');
    component.onPageChange({ pageIndex: 1, pageSize: 5, length: 20 } as any);
    expect(spy).toHaveBeenCalled();
  });

  it('should call getMovies on filter change', () => {
    const spy = spyOn(component, 'getMovies');
    component.onFilterChange();
    expect(spy).toHaveBeenCalled();
  });
});
