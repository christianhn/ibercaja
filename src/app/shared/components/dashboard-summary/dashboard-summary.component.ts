import { Component, Input } from '@angular/core';
import { DashboardService } from 'src/app/core/services/dashboard/dashboard.service';
import { Summary } from '../../models/user.interface';

@Component({
  selector: 'app-dashboard-summary',
  templateUrl: './dashboard-summary.component.html',
  styleUrls: ['./dashboard-summary.component.scss']
})
export class DashboardSummaryComponent {

  @Input() summary!: Summary[];

}
