import { Component } from '@angular/core';

@Component({
  selector: 'app-accounts-section-component',
  templateUrl: './accounts-section-component.component.html',
  styleUrls: ['./accounts-section-component.component.scss']
})
export class AccountsSectionComponentComponent {

  cards = [
    {
      title: "Pago nóminas",
      paymentMethod: "*5493",
      cash: 1987765.09,
      availableAmount: "3087"
    },
    {
      title: "Pago nóminas",
      paymentMethod: "*5493",
      cash: 1987765.09,
      availableAmount: "3087"
    },
    {
      title: "Pago nóminas",
      paymentMethod: "*5493",
      cash: 1987765.09,
      availableAmount: "3087"
    }
  ]

}
