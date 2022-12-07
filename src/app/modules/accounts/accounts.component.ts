import { Component } from '@angular/core';
import { DashboardService } from 'src/app/core/services/dashboard/dashboard.service';
import { DashboardFilter } from 'src/app/shared/models/dashboardFilter.interface';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {

  isTable: boolean = false;
  actions = [
    '<span class="icon-Mostrar"></span>&nbsp; Mostrar ocultas',
    'Filtra resultados &nbsp;<span class="icon-Chevron-abajo"></span>'
  ];

  firstDashboardFilter: DashboardFilter | undefined;
  secondDashboardFilter: DashboardFilter | undefined;

  constructor( 
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.dashboardService.getDashboardFilters()
    .subscribe( res => {
      this.firstDashboardFilter = res.find( element => element.title === 'Cuentas');
      this.secondDashboardFilter = res.find( element => element.title === 'Tarjetas');
    });
  }

  isTabletIndicator(event: boolean){
    this.isTable = event;
  }
}
