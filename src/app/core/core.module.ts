import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSidebarComponent } from './components/home-sidebar/home-sidebar.component';
import { SharedModule } from '../shared/components/shared.module';
import { FooterMainComponent } from './components/footer-main/footer-main.component';
import { NavbarMainComponent } from './components/navbar-main/navbar-main.component';



@NgModule({
  declarations: [
    HomeSidebarComponent,
    NavbarMainComponent,
    FooterMainComponent
  ],
  exports: [
    HomeSidebarComponent,
    NavbarMainComponent,
    FooterMainComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoreModule { }
