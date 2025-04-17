import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMoviesComponent } from './list-movies-year.component';

describe('ListMoviesComponent', () => {
  let component: ListMoviesComponent;
  let fixture: ComponentFixture<ListMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
