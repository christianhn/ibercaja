import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { SharedModule } from '../shared/components/shared.module';
import { CoreModule } from '../core/core.module';
import { AccountsModule } from '../modules/accounts/accounts.module';
import { DashboardLayoutRoutingModule } from './dashboard-layout-routing.module';



@NgModule({
  declarations: [
    DashboardLayoutComponent
  ],
  exports: [
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    AccountsModule,
    DashboardLayoutRoutingModule
  ]
})
export class DashboardLayoutModule { }
