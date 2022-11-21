import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { DashboardLayoutComponent } from './shared/components/home/dashboard-layout/dashboard-layout.component';
import { NavigationMenuComponent } from './shared/components/home/dashboard-layout/navigation-menu/navigation-menu.component';
import { HomeSidebarComponent } from './shared/components/home/dashboard-layout/home-sidebar/home-sidebar.component';
import { DashboardFavoritesComponent } from './shared/components/home/dashboard-layout/dashboard-favorites/dashboard-favorites.component';
import { DashboardWelcomeComponent } from './shared/components/home/dashboard-layout/dashboard-welcome/dashboard-welcome.component';
import { DashboardSummaryComponent } from './shared/components/home/dashboard-layout/dashboard-summary/dashboard-summary.component';
import { AccountsSectionComponentComponent } from './shared/components/home/dashboard-layout/accounts-section-component/accounts-section-component.component';
import { CardSectionComponentComponent } from './shared/components/home/dashboard-layout/card-section-component/card-section-component.component';
import { DashboardFiltersComponentComponent } from './shared/components/home/dashboard-layout/dashboard-filters-component/dashboard-filters-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardLayoutComponent,
    NavigationMenuComponent,
    HomeSidebarComponent,
    DashboardFavoritesComponent,
    DashboardWelcomeComponent,
    DashboardSummaryComponent,
    AccountsSectionComponentComponent,
    CardSectionComponentComponent,
    DashboardFiltersComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
