import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'accounts',
        loadChildren: () => import('../modules/accounts/accounts-routing.module').then( m => m.AccountsRoutingModule )
      },
      {
        path: 'financing',
        loadChildren: () => import('../modules/financing/financing-routing.module').then( m => m.FinancingRoutingModule )
      },
      {
        path: 'commerce',
        loadChildren: () => import('../modules/foreign-trade/foreign-trade-routing.module').then( m => m.ForeignTradeRoutingModule )
      },
      {
        path: 'payments',
        loadChildren: () => import('../modules/payments/payments-routing.module').then( m => m.PaymentsRoutingModule )
      },
      {
        path: '**',
        redirectTo: 'accounts'
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardLayoutRoutingModule { }
