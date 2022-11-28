import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { HomeSidebarComponent } from './home-sidebar/home-sidebar.component';
import { DashboardHeadModule } from './dashboard-head/dashboard-head.module';
import { AccountsSectionModule } from './accounts-section-component/accounts-section.module';
import { CardSectionModule } from './card-section-component/card-section.module';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    HomeSidebarComponent
  ],
  exports:[
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardHeadModule,
    AccountsSectionModule,
    CardSectionModule
  ]
})
export class DashboardLayoutModule { }
