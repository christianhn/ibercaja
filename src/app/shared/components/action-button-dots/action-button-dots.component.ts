import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-action-button-dots',
  templateUrl: './action-button-dots.component.html',
  styleUrls: ['./action-button-dots.component.scss']
})
export class ActionButtonDotsComponent {

  @Input() card: any;

  options(e:Event, card: any){ 
    console.log(e);
    
    e.stopPropagation();
    card.isOpenAction = !card.isOpenAction;
  }
}
