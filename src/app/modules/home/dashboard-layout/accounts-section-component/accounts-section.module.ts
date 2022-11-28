import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/components/shared.module';
import { AccountsSectionComponentComponent } from './accounts-section-component.component';



@NgModule({
  declarations: [
    AccountsSectionComponentComponent
  ],
  exports: [
    AccountsSectionComponentComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AccountsSectionModule { }
