import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonDotsComponent } from './action-button-dots.component';

describe('ActionButtonDotsComponent', () => {
  let component: ActionButtonDotsComponent;
  let fixture: ComponentFixture<ActionButtonDotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonDotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionButtonDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
