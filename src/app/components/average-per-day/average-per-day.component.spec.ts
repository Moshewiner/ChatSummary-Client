import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AveragePerDayComponent } from './average-per-day.component';

describe('AveragePerDayComponent', () => {
  let component: AveragePerDayComponent;
  let fixture: ComponentFixture<AveragePerDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AveragePerDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AveragePerDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
