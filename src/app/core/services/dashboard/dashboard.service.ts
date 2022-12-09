import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardFilter } from 'src/app/shared/models/dashboardFilter.interface';
import { Favorite } from 'src/app/shared/models/favorite.interface';
import { Footer } from 'src/app/shared/models/footer.interface';
import { NavLevel } from 'src/app/shared/models/navLavel.interface';
import { SidebarBanner } from 'src/app/shared/models/sidebarBanner.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  dashboardFiltersURL: string = "/assets/mock/dashboard-filters-mock-data.json";
  favoritesURL: string = "/assets/mock/favorites-mock-data.json";
  footerURL: string = "/assets/mock/footer-mock-data.json";
  navLevelsURL: string = "/assets/mock/nav-levels-mock-data.json";
  sidebarBannerURL: string = "/assets/mock/sidebar-banner-mock-data.json";
  
  constructor( private http: HttpClient ) { }


  public getDashboardFilters(): Observable<DashboardFilter[]> {

    if ( environment.api_accounts_mock ) {
      return this.http.get<DashboardFilter[]>(this.dashboardFiltersURL);
    } else {
      // Api get text of dashboard interface
      return this.http.get<DashboardFilter[]>(this.dashboardFiltersURL);
    }

  }

  public getFavorites(): Observable<Favorite[]> {

    if ( environment.api_accounts_mock ) {
      return this.http.get<Favorite[]>(this.favoritesURL);
    } else {
      // Api get text of dashboard interface
      return this.http.get<Favorite[]>(this.favoritesURL);
    }

  }

  public getFooter(): Observable<Footer[]> {

    if ( environment.api_accounts_mock ) {
      return this.http.get<Footer[]>(this.footerURL);
    } else {
      // Api get text of dashboard interface
      return this.http.get<Footer[]>(this.footerURL);
    }

  }

  public getNavLevels(): Observable<NavLevel[]> {

    if ( environment.api_accounts_mock ) {
      return this.http.get<NavLevel[]>(this.navLevelsURL);
    } else {
      // Api get text of dashboard interface
      return this.http.get<NavLevel[]>(this.navLevelsURL);
    }

  }

  public getSidebarBanner(): Observable<SidebarBanner[]> {

    if ( environment.api_accounts_mock ) {
      return this.http.get<SidebarBanner[]>(this.sidebarBannerURL);
    } else {
      // Api get text of dashboard interface
      return this.http.get<SidebarBanner[]>(this.sidebarBannerURL);
    }

  }

}
