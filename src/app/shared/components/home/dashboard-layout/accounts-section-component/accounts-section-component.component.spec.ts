import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsSectionComponentComponent } from './accounts-section-component.component';

describe('AccountsSectionComponentComponent', () => {
  let component: AccountsSectionComponentComponent;
  let fixture: ComponentFixture<AccountsSectionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsSectionComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsSectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
