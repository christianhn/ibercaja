import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHeadComponent } from './dashboard-head.component';
import { SharedModule } from '../../../../shared/components/shared.module';



@NgModule({
    declarations: [
        DashboardHeadComponent
    ],
    exports: [
        DashboardHeadComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class DashboardHeadModule { }
