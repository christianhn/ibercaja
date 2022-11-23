import { Component } from '@angular/core';

@Component({
  selector: 'app-card-section-component',
  templateUrl: './card-section-component.component.html',
  styleUrls: ['./card-section-component.component.scss']
})
export class CardSectionComponentComponent {

  title = "Tarjetas";
  isShown = false;
  actions = [];

  cards = [
    {
      title: "María Salas López",
      paymentMethod: "...5493",
      cash: {
        aviable: 75000,
        total: 100000,
        width: 0
      }
    },
    {
      title: "María Salas López",
      paymentMethod: "...5493",
      cash: {
        aviable: 75000,
        total: 100000,
        width: 0
      }
    }
  ];

  ngOnInit(): void {
    
    this.cards.forEach(element => {
      const aviableWidth = (element.cash.aviable/element.cash.total)*10;
      element.cash.width = aviableWidth;
    });
  }

}
