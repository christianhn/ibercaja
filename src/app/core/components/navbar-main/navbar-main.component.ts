import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user.interface';
import { AccountsService } from '../../services/accounts/accounts.service';

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.scss']
})
export class NavbarMainComponent {

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
  ) {
    this.accountsService.getUser("id")
    .subscribe( res => {
      this.user = res;
    });
  }

  ngOnInit(): void {

  }

}
