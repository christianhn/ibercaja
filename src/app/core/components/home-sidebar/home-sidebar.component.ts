import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-sidebar',
  templateUrl: './home-sidebar.component.html',
  styleUrls: ['./home-sidebar.component.scss']
})
export class HomeSidebarComponent {
  isShowScroll: boolean = false;
  movements  = [
    {
      date: "22 SEP",
      payments: [
        {
          concept: "Pago nóminas",
          amount: -1000
        },
        {
          concept: "Pago nóminas",
          amount: 799
        },
        {
          concept: "Pago nóminas",
          amount: 25555
        }
      ]
    },
    {
      date: "21 SEP",
      payments: [
        {
          concept: "Pago nóminas",
          amount: -100000
        },
        {
          concept: "Pago nóminas",
          amount: 1000000
        },
        {
          concept: "Pago nóminas",
          amount: 23567
        },
        {
          concept: "Pago nóminas",
          amount: 2456
        },
        {
          concept: "Pago nóminas",
          amount: 23567
        }
      ]
    }
  ];

  @HostListener("scroll", ['$event'])
  doSomethingOnScroll(){
    if (!this.isShowScroll) {
      this.isShowScroll = true;
      setTimeout(() => {
        this.isShowScroll = false;
      }, 1000)
    }
  }
  
}
