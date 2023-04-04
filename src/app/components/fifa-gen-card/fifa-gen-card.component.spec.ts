import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifaGenCardComponent } from './fifa-gen-card.component';

describe('FifaGenCardComponent', () => {
  let component: FifaGenCardComponent;
  let fixture: ComponentFixture<FifaGenCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifaGenCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifaGenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
