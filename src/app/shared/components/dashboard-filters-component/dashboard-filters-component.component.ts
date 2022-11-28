import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-filters-component',
  templateUrl: './dashboard-filters-component.component.html',
  styleUrls: ['./dashboard-filters-component.component.scss']
})
export class DashboardFiltersComponentComponent {

  @Input() title: string = "";
  @Input() actions: any[] = [];
  @Input() isShown: boolean = false;

}
