import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TopStudioWinnersComponent } from './top-studio-winners.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TopStudioWinnersComponent', () => {
  let component: TopStudioWinnersComponent;
  let fixture: ComponentFixture<TopStudioWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopStudioWinnersComponent, HttpClientTestingModule, NoopAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopStudioWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
