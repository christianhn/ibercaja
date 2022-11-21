import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { DashboardLayoutComponent } from './views/home/dashboard-layout/dashboard-layout.component';
import { NavigationMenuComponent } from './views/home/dashboard-layout/navigation-menu/navigation-menu.component';
import { HomeSidebarComponent } from './views/home/dashboard-layout/home-sidebar/home-sidebar.component';
import { DashboardFavoritesComponent } from './views/home/dashboard-layout/dashboard-favorites/dashboard-favorites.component';
import { DashboardWelcomeComponent } from './views/home/dashboard-layout/dashboard-welcome/dashboard-welcome.component';
import { DashboardSummaryComponent } from './views/home/dashboard-layout/dashboard-summary/dashboard-summary.component';
import { AccountsSectionComponentComponent } from './views/home/dashboard-layout/accounts-section-component/accounts-section-component.component';
import { CardSectionComponentComponent } from './views/home/dashboard-layout/card-section-component/card-section-component.component';
import { DashboardFiltersComponentComponent } from './views/home/dashboard-layout/dashboard-filters-component/dashboard-filters-component.component';

// cambiar el locale de la aplicacion
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

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
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
