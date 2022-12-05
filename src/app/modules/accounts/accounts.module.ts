import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts.component';
import { AccountsSectionComponentComponent } from './accounts-section-component/accounts-section-component.component';
import { CardSectionComponentComponent } from './card-section-component/card-section-component.component';
import { SharedModule } from '../../shared/components/shared.module';
import { AccountsRoutingModule } from './accounts-routing.module';



@NgModule({
  declarations: [    
    AccountsComponent,
    AccountsSectionComponentComponent,
    CardSectionComponentComponent
  ],
  exports: [
    AccountsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
