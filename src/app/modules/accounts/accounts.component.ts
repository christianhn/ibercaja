import { Component } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {

  isTable: boolean = false;
  actions = [
    '<span class="icon-Mostrar"></span>&nbsp; Mostrar ocultas',
    'Filtra resultados &nbsp;<span class="icon-Chevron-abajo"></span>'
  ];


  isTabletIndicator(event: boolean){
    this.isTable = event;
  }
}
