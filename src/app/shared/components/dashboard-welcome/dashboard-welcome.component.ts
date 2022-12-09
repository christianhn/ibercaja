import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-welcome',
  templateUrl: './dashboard-welcome.component.html',
  styleUrls: ['./dashboard-welcome.component.scss']
})
export class DashboardWelcomeComponent {
  @Input() name: string = "";

  date: Date = new Date();
}
