import { Component } from '@angular/core';
import { DashboardService } from 'src/app/core/services/dashboard/dashboard.service';
import { NavLevel } from '../../models/navLavel.interface';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent {

  navLevels: NavLevel[] = [];
  navSelected: string | undefined = "";
  navOpened:boolean = false;

  constructor( 
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.dashboardService.getNavLevels()
    .subscribe( res => {
      this.navLevels = res;
      this.navSelected = this.navLevels.find(element => element.id === "accounts")?.name;
    });
    
  }

  selectLevel(level: any){
    
    this.navLevels.forEach(element => {
      element.isShown = false;
    });
    
    level.isShown = true;
    this.navSelected = level.name;
  }

  openNav(){
    this.navOpened = !this.navOpened;
  }

}
