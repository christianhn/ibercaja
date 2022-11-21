import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-summary',
  templateUrl: './dashboard-summary.component.html',
  styleUrls: ['./dashboard-summary.component.scss']
})
export class DashboardSummaryComponent {

  summary = [
    {
      name: "Saldo cuentas",
      amount: 153000
    },
    {
      name: "Ahorro - Inversión",
      amount: 100000
    },
    {
      name: "Financiación",
      amount: 50000
    }
  ]

}
