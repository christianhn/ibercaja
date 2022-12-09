import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/shared/models/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  baseURL: string = "/assets/mock/accounts-mock-data.json";
  
  constructor( private http: HttpClient ) { }


  public getUser( id: string ): Observable<User> {

    if ( environment.api_accounts_mock ) {
      return this.http.get<User>(this.baseURL);
    } else {
      // Api get accounts
      return this.http.get<User>(this.baseURL);
    }

  }
}
