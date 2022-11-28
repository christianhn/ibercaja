import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSectionComponentComponent } from './card-section-component.component';

describe('CardSectionComponentComponent', () => {
  let component: CardSectionComponentComponent;
  let fixture: ComponentFixture<CardSectionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSectionComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
