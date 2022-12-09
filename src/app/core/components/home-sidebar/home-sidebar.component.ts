import { Component, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SidebarBanner } from 'src/app/shared/models/sidebarBanner.interface';
import { Movement, User } from 'src/app/shared/models/user.interface';
import { DashboardService } from '../../services/dashboard/dashboard.service';

@Component({
  selector: 'app-home-sidebar',
  templateUrl: './home-sidebar.component.html',
  styleUrls: ['./home-sidebar.component.scss']
})
export class HomeSidebarComponent implements OnChanges {
  @Input() user!: User;

  isShowScroll: boolean = false;
  movements: Movement[] = [];

  bannerInfo: string = "Comprar ordenadores";
  bannerList: SidebarBanner[] = [];

  constructor( 
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.dashboardService.getSidebarBanner()
    .subscribe( res => {
      this.bannerList = res;
    });
  }

  ngOnChanges( changes: SimpleChanges ): void{
    if ( changes['user'] && changes['user'].currentValue !== undefined ){
      this.movements = this.user.movements;
    }
  }

  @HostListener("scroll", ['$event'])
  doSomethingOnScroll(){
    if (!this.isShowScroll) {
      this.isShowScroll = true;
      setTimeout(() => {
        this.isShowScroll = false;
      }, 1000)
    }
  }
  
}
