import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancingComponent } from './financing.component';
import { FinancingRoutingModule } from './financing-routing.module';



@NgModule({
  declarations: [
    FinancingComponent
  ],
  exports: [
    FinancingComponent
  ],
  imports: [
    CommonModule,
    FinancingRoutingModule
  ]
})
export class FinancingModule { }
