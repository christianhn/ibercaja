import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-filters-component',
  templateUrl: './dashboard-filters-component.component.html',
  styleUrls: ['./dashboard-filters-component.component.scss']
})
export class DashboardFiltersComponentComponent {

  isTableB: boolean = false;
  isMobile: boolean = false;
  mobileSize: number = 1023;

  @Input() isShown: boolean = false;
  @Input() dashboardFilter: any;

  @Output() isTable: EventEmitter<boolean> = new EventEmitter;

  ngOnInit(): void {
    this.isTable.emit(false);
    this.isMobileCheck();
  }
  
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.isMobileCheck();
  }

  isMobileCheck(){    
    if (window.innerWidth <= this.mobileSize) {
      this.isMobile = true;
      this.isTableB = false;
      this.isTable.emit(false);
    } else {
      this.isMobile = false;
    }    
  }
  
  onClickGridView(){
    this.isTable.emit(false);
    this.isTableB = false;

  }

  onClickTableView(){
    this.isTable.emit(true);
    this.isTableB = true;

  }

}
