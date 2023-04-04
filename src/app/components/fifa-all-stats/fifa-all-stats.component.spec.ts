import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifaAllStatsComponent } from './fifa-all-stats.component';

describe('FifaAllStatsComponent', () => {
  let component: FifaAllStatsComponent;
  let fixture: ComponentFixture<FifaAllStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifaAllStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifaAllStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
