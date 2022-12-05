import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSidebarComponent } from './components/home-sidebar/home-sidebar.component';



@NgModule({
  declarations: [
    HomeSidebarComponent
  ],
  exports: [
    HomeSidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
