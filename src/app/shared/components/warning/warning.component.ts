import { Component, Input } from '@angular/core';
import { Notification } from '../../../shared/models/user.interface';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss']
})
export class WarningComponent {

  @Input() notifications!: Notification[];

}
