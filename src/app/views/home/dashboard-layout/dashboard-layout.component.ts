import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent {

  isHide = true;
  tabletSize = 1280;
  mobileSize = 1023;

  ngOnInit(): void {

    if ( window.innerWidth>this.mobileSize && window.innerWidth<this.tabletSize ) {
      this.isHide = true;      
    } else {
      this.isHide = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {    
    if (window.innerWidth>=this.tabletSize || window.innerWidth<=this.mobileSize) {
      this.isHide = false;
    } else {
      this.isHide = true;
    }
  }

  openSidebar(){
    if ( window.innerWidth>this.mobileSize && window.innerWidth<this.tabletSize ) {
      this.isHide = false;
    }
  }
  
  closeSidebar(){
    if ( window.innerWidth>this.mobileSize && window.innerWidth<this.tabletSize ) {
      this.isHide = true;
    }
  }
}
