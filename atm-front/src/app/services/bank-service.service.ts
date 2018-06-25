import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankServiceService {

  constructor(private http: HttpClient) {}

  getBanks() {
    return this.http.get(environment.serverUrl + 'banks/');
  }

}
