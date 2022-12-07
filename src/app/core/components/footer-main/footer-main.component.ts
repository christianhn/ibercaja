import { Component } from '@angular/core';
import { Footer } from 'src/app/shared/models/footer.interface';
import { DashboardService } from '../../services/dashboard/dashboard.service';

@Component({
  selector: 'app-footer-main',
  templateUrl: './footer-main.component.html',
  styleUrls: ['./footer-main.component.scss']
})
export class FooterMainComponent {

  footerItems: Footer[] = [];

  constructor( 
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.dashboardService.getFooter()
    .subscribe( res => {
      this.footerItems = res;
    });
  }
  
}
