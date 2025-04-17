import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProducersWinsComponent } from './producers-wins.component';

describe('ProducersWinsComponent', () => {
  let component: ProducersWinsComponent;
  let fixture: ComponentFixture<ProducersWinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducersWinsComponent, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProducersWinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
