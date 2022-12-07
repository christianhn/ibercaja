import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  baseURL: string = "/assets/mock/accounts-mock-data.json";
  
  constructor(
    private http: HttpClient
    ) { }


  public getJSON(): Observable<any> {
    console.log(this.http.get(this.baseURL));
    
    return this.http.get(this.baseURL);
  }
}
