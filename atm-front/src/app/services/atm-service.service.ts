import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AccountForm} from '../model/AccountForm.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtmServiceService {

  constructor(private http: HttpClient) {}


  public withdraw(acc: AccountForm) {
    return this.http.post(environment.serverUrl + 'atm/withdraw', acc);
  }
}
