import { Component, HostListener, Input } from '@angular/core';
import { AccountsService } from 'src/app/core/services/accounts/accounts.service';
import { User } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-accounts-section-component',
  templateUrl: './accounts-section-component.component.html',
  styleUrls: ['./accounts-section-component.component.scss']
})
export class AccountsSectionComponentComponent {

  @Input() isTable: boolean = false;
  isShown = true;
  mobileSize: number = 1023;
  isMobile: boolean = false;
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
  ) {}

  ngOnInit(): void {
    this.isMobileCheck();

    this.accountsService.getUser("id")
    .subscribe( res => {      
      this.user = res;
    });
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
