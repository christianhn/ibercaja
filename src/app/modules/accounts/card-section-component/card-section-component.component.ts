import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AccountsService } from 'src/app/core/services/accounts/accounts.service';
import { Card, User } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-card-section-component',
  templateUrl: './card-section-component.component.html',
  styleUrls: ['./card-section-component.component.scss']
})
export class CardSectionComponentComponent implements OnChanges, OnInit{

  @Input() isTable: boolean = false;
  title: string = "Tarjetas";
  isShown: boolean = false;
  actions = [];
  tabletSize: number = 1280;
  mobileSize: number = 1023;
  isPxWith: boolean = true;
  cards: Card[] = [];
  user: User = {
    id: '',
    name: '',
    firstSurname: '',
    secondSurname: '',
    summary: [],
    accounts: [],
    cards: [],
    movements: [],
    notifications: []
  };

  constructor( 
    private accountsService: AccountsService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  ngOnChanges( changes: SimpleChanges ): void{    
    if ( changes['isTable'] && changes['isTable'].currentValue !== undefined ){
      this.calculateAviableWith();
    }
  }

  getUser(){
    this.accountsService.getUser("id")
    .subscribe(res => {
          
      this.user = res;
      this.cards = this.user.cards;

      this.calculateAviableWith();

    });    
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.calculateAviableWith();
  }

  launchAlert(cardSelected: any){
    var message = "Navegamos a la cuenta/tarjeta " + cardSelected.title;
    alert(message);
  }

  calculateAviableWith(): void{    
    this.cards.forEach(element => {        
      let aviableWidth = (element.cash.aviable/element.cash.total)*150;
      if ( window.innerWidth <= this.mobileSize ) {
        this.isPxWith = false;
        aviableWidth = (element.cash.aviable/element.cash.total)*30;
      } else if ( this.isTable ) {
        this.isPxWith = false;
        aviableWidth = (element.cash.aviable/element.cash.total)*7;
      } else {
        this.isPxWith = true;
        aviableWidth = (element.cash.aviable/element.cash.total)*150;
      }
      element.cash.width = aviableWidth;
    });   
  }
}
