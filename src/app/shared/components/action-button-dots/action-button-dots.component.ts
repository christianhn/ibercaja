import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-action-button-dots',
  templateUrl: './action-button-dots.component.html',
  styleUrls: ['./action-button-dots.component.scss']
})
export class ActionButtonDotsComponent {

  @Input() card: any;

  options( card: any ){     
    card.isOpenAction = !card.isOpenAction;
  }
}
