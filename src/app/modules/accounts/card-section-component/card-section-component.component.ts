import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-card-section-component',
  templateUrl: './card-section-component.component.html',
  styleUrls: ['./card-section-component.component.scss']
})
export class CardSectionComponentComponent {

  @Input() isTable: boolean = false;
  title: string = "Tarjetas";
  isShown: boolean = false;
  actions = [];
  tabletSize: number = 1280;
  mobileSize: number = 1023;
  isMobile: boolean = false;
  cards = [
    {
      title: "María Salas López",
      paymentMethod: "...5493",
      cash: {
        aviable: 75000,
        total: 100000,
        width: 0
      },
      isOpenAction: false
    },
    {
      title: "María Salas López",
      paymentMethod: "...5493",
      cash: {
        aviable: 65000,
        total: 100000,
        width: 0
      },
      isOpenAction: false
    }
  ];

  ngOnInit(): void {
    this.cards.forEach(element => {
      let aviableWidth = (element.cash.aviable/element.cash.total)*150;
      if ( window.innerWidth <= this.mobileSize ) {
        this.isMobile = true;
        aviableWidth = (element.cash.aviable/element.cash.total)*30;
      };
      element.cash.width = aviableWidth;
    });
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {

    if (!this.isMobile && window.innerWidth <= this.mobileSize) {
      this.isMobile = true;
      this.cards.forEach(element => {
        const aviableWidth = (element.cash.aviable/element.cash.total)*30;
        element.cash.width = aviableWidth;
      });
    };

    if (this.isMobile && window.innerWidth > this.mobileSize) {
      this.isMobile = false;
      this.cards.forEach(element => {
        const aviableWidth = (element.cash.aviable/element.cash.total)*150;
        element.cash.width = aviableWidth;
      });
    };
  }

}
