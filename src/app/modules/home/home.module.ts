import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DashboardLayoutModule } from './dashboard-layout/dashboard-layout.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  exports:[
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardLayoutModule
  ]
})
export class HomeModule { }
