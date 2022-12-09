import { Component, HostListener, Input } from '@angular/core';
import { AccountsService } from 'src/app/core/services/accounts/accounts.service';
import { Card, User } from 'src/app/shared/models/user.interface';

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
  cards: Card[] = [];
  user: User = {
    id: '',
    name: '',
    firstSurname: '',
    secondSurname: '',
    summary: [],
    accounts: [],
    cards: [],
    movements: []
  };

  constructor( 
    private accountsService: AccountsService
  ) {
    this.accountsService.getUser("id")
    .subscribe(res => {
      console.log("RESPUESTA ######");
      
      console.log("respuesta #####", res);
      
      this.user = res;
      this.cards = this.user.cards;

    });
  }

  async ngOnInit(): Promise<void> {
    console.log("1");
    await this.getUser();
    console.log("3");
    
    console.log("for de cards", this.cards);
    
    this.cards.forEach(element => {
      console.log("elemento de card", element);
      
      let aviableWidth = (element.cash.aviable/element.cash.total)*150;
      if ( window.innerWidth <= this.mobileSize ) {
        this.isMobile = true;
        aviableWidth = (element.cash.aviable/element.cash.total)*30;
      };
      element.cash.width = aviableWidth;
    });
  }

  async getUser(){
    await this.accountsService.getUser("id")
    .subscribe(res => {
      console.log("RESPUESTA ######");
      
      console.log("respuesta #####", res);
      
      this.user = res;
      this.cards = this.user.cards;

    });
    console.log("2");
    console.log("usuario", this.user);
    
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

  launchAlert(cardSelected: any){
    var message = "Navegamos a la cuenta/tarjeta " + cardSelected.title;
    alert(message);
  }
}
