import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/components/shared.module';
import { CardSectionComponentComponent } from './card-section-component.component';



@NgModule({
  declarations: [
    CardSectionComponentComponent
  ],
  exports: [
    CardSectionComponentComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CardSectionModule { }
