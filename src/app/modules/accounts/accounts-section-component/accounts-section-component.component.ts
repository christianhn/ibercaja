import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-accounts-section-component',
  templateUrl: './accounts-section-component.component.html',
  styleUrls: ['./accounts-section-component.component.scss']
})
export class AccountsSectionComponentComponent {

  @Input() isTable: boolean = false;
  title = "Cuentas";
  isShown = true;
  mobileSize: number = 1023;
  isMobile: boolean = false;
  actions = [
    '<span class="icon-Mostrar"></span>&nbsp; Mostrar ocultas',
    'Filtra resultados &nbsp;<span class="icon-Chevron-abajo"></span>'
  ];

  cards = [
    {
      title: "Pago nóminas",
      paymentMethod: "*5493",
      cash: 1987765.09,
      availableAmount: "3087",
      isOpenAction: false
    },
    {
      title: "Pago nóminas",
      paymentMethod: "*5493",
      cash: 1987765.09,
      availableAmount: "3087",
      isOpenAction: false
    },
    {
      title: "Pago nóminas",
      paymentMethod: "*5493",
      cash: 1987765.09,
      availableAmount: "3087",
      isOpenAction: false
    }
  ]

  ngOnInit(): void {
    this.isMobileCheck();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {

    this.isMobileCheck();
  }

  isMobileCheck(){
    if (window.innerWidth <= this.mobileSize) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  launchAlert(cardSelected: any){
    var message = "Navegamos a la cuenta/tarjeta " + cardSelected.title;
    alert(message);
  }
}
