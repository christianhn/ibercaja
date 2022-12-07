import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user.interface';
import { AccountsService } from '../../services/accounts/accounts.service';

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.scss']
})
export class NavbarMainComponent {

  user!: User;

  constructor( 
    private accountsService: AccountsService
  ) {}

  ngOnInit(): void {
    this.accountsService.getUser("id")
    .subscribe( res => {
      console.log(res);
      
      this.user = res;
    });
  }

}
