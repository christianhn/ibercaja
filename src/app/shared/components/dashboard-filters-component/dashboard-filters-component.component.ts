import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Actions, DashboardFilter } from '../../models/dashboardFilter.interface';

@Component({
  selector: 'app-dashboard-filters-component',
  templateUrl: './dashboard-filters-component.component.html',
  styleUrls: ['./dashboard-filters-component.component.scss']
})
export class DashboardFiltersComponentComponent implements OnInit, OnChanges{

  isTableB: boolean = false;
  isMobile: boolean = false;
  mobileSize: number = 1023;
  title: string = "";
  actions: Actions[] = [];

  @Input() isShown: boolean = false;
  @Input() dashboardFilter: DashboardFilter = {
    title: '',
    actions: []
  };

  @Output() isTable: EventEmitter<boolean> = new EventEmitter;

  ngOnInit(): void {
    this.isTable.emit(false);
    this.isMobileCheck();
  }

  ngOnChanges( changes: SimpleChanges ): void{
    if ( changes['dashboardFilter'] && changes['dashboardFilter'].currentValue !== undefined ){
      this.title = this.dashboardFilter.title;
      this.actions = this.dashboardFilter.actions;
    }
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
