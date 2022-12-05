import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForeignTradeComponent } from './foreign-trade.component';

const routes: Routes = [
  {
    path: '',
    component: ForeignTradeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForeignTradeRoutingModule { }
