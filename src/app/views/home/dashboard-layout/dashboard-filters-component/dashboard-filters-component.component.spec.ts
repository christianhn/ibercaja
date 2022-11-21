import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFiltersComponentComponent } from './dashboard-filters-component.component';

describe('DashboardFiltersComponentComponent', () => {
  let component: DashboardFiltersComponentComponent;
  let fixture: ComponentFixture<DashboardFiltersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardFiltersComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardFiltersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
