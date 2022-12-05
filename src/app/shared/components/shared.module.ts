import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardFavoritesComponent } from './dashboard-favorites/dashboard-favorites.component';
import { DashboardSummaryComponent } from './dashboard-summary/dashboard-summary.component';
import { DashboardWelcomeComponent } from './dashboard-welcome/dashboard-welcome.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { DashboardFiltersComponentComponent } from './dashboard-filters-component/dashboard-filters-component.component';
import { ActionButtonDotsComponent } from './action-button-dots/action-button-dots.component';
import { NavbarMainComponent } from './navbar-main/navbar-main.component';
import { FooterMainComponent } from './footer-main/footer-main.component';



@NgModule({
  declarations: [
    DashboardFiltersComponentComponent,
    DashboardFavoritesComponent,
    DashboardWelcomeComponent,
    DashboardSummaryComponent,
    NavigationMenuComponent,
    ActionButtonDotsComponent,
    NavbarMainComponent,
    FooterMainComponent
  ],
  exports:[
    DashboardFiltersComponentComponent,
    DashboardFavoritesComponent,
    DashboardWelcomeComponent,
    DashboardSummaryComponent,
    NavigationMenuComponent,
    ActionButtonDotsComponent,
    NavbarMainComponent,
    FooterMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
