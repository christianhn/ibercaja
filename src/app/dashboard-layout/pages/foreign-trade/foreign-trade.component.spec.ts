import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignTradeComponent } from './foreign-trade.component';

describe('ForeignTradeComponent', () => {
  let component: ForeignTradeComponent;
  let fixture: ComponentFixture<ForeignTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeignTradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForeignTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
