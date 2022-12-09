import { Component } from '@angular/core';
import { DashboardService } from 'src/app/core/services/dashboard/dashboard.service';
import { Favorite } from '../../models/favorite.interface';

@Component({
  selector: 'app-dashboard-favorites',
  templateUrl: './dashboard-favorites.component.html',
  styleUrls: ['./dashboard-favorites.component.scss']
})
export class DashboardFavoritesComponent {

  favorites: Favorite[] = [];

  constructor( 
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.dashboardService.getFavorites()
    .subscribe( res => {
      this.favorites = res;
    });
  }
}
