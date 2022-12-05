import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// cambiar el locale de la aplicacion
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { DashboardLayoutModule } from './dashboard-layout/dashboard-layout.module';
import { SharedModule } from './shared/components/shared.module';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardLayoutModule,
    SharedModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
