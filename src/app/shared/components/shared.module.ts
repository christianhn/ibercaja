import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardFavoritesComponent } from './dashboard-favorites/dashboard-favorites.component';
import { DashboardSummaryComponent } from './dashboard-summary/dashboard-summary.component';
import { DashboardWelcomeComponent } from './dashboard-welcome/dashboard-welcome.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { DashboardFiltersComponentComponent } from './dashboard-filters-component/dashboard-filters-component.component';
import { ActionButtonDotsComponent } from './action-button-dots/action-button-dots.component';
import { RouterModule } from '@angular/router';
import { BannerInfoComponent } from './banner-info/banner-info.component';



@NgModule({
  declarations: [
    DashboardFiltersComponentComponent,
    DashboardFavoritesComponent,
    DashboardWelcomeComponent,
    DashboardSummaryComponent,
    NavigationMenuComponent,
    ActionButtonDotsComponent,
    BannerInfoComponent
  ],
  exports:[
    DashboardFiltersComponentComponent,
    DashboardFavoritesComponent,
    DashboardWelcomeComponent,
    DashboardSummaryComponent,
    NavigationMenuComponent,
    ActionButtonDotsComponent,
    BannerInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
