import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { AccountsSectionComponentComponent } from './components/accounts-section-component/accounts-section-component.component';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { CardSectionComponentComponent } from './components/card-section-component/card-section-component.component';
import { DashboardHeadComponent } from './components/dashboard-head/dashboard-head.component';
import { CoreModule } from 'src/app/core/core.module';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { FinancingComponent } from './pages/financing/financing.component';
import { ForeignTradeComponent } from './pages/foreign-trade/foreign-trade.component';
import { PaymentsComponent } from './pages/payments/payments.component';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    AccountsSectionComponentComponent,
    CardSectionComponentComponent,
    DashboardHeadComponent,
    AccountsComponent,
    FinancingComponent,
    ForeignTradeComponent,
    PaymentsComponent
  ],
  exports:[
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ]
})
export class DashboardLayoutModule { }
