import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CoreModule } from 'src/app/core/core.module';
import { DashboardLayoutModule } from '../modules/dashboard-layout/dashboard-layout.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  exports:[
    HomeComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    DashboardLayoutModule
  ]
})
export class HomeModule { }
