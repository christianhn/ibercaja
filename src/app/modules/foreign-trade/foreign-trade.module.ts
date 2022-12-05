import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForeignTradeRoutingModule } from './foreign-trade-routing.module';
import { ForeignTradeComponent } from './foreign-trade.component';



@NgModule({
  declarations: [
    ForeignTradeComponent
  ],
  exports: [
    ForeignTradeComponent
  ],
  imports: [
    CommonModule,
    ForeignTradeRoutingModule
  ]
})
export class ForeignTradeModule { }
