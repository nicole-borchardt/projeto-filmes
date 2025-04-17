import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListMoviesYearComponent } from './list-movies-year.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListMoviesComponent', () => {
  let component: ListMoviesYearComponent;
  let fixture: ComponentFixture<ListMoviesYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMoviesYearComponent, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMoviesYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
