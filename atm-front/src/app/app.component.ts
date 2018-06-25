import {Component, OnInit} from '@angular/core';
import {BankServiceService} from './services/bank-service.service';
import {AtmServiceService} from './services/atm-service.service';
import {AccountForm} from './model/AccountForm.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Caixa Eletrônico ATM';
  banks;
  accountForm = new AccountForm();
  retur = "Realize um saque.";
  constructor(
    private bankService: BankServiceService,
    private atmService: AtmServiceService) {
  }

  ngOnInit() {
    this.loadBanks();
    this.accountForm.bankId = 1;
  }


  loadBanks() {
    this.bankService.getBanks()
      .subscribe((data) => this.banks = data);
  }

  withdraw() {
    this.atmService.withdraw(this.accountForm)
      .subscribe((data) => this.retur = JSON.stringify(data));
  }

}
