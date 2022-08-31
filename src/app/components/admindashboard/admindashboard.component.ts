import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from './../../model/globa-constants';
import { BankingService } from './../../service/banking.service';
import { Transaction } from 'src/app/model/transaction.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  // accountDetails:any;
  // transactions!: Observable<Transaction[]>;


  // constructor(private bankingService:BankingService,public global:GlobalConstants) {
  //   this.bankingService.getAccountByAccountId(this.global.getGlobalVar()).subscribe(data=>this.accountDetails=data);
  //  }

  accounts:any;

  constructor(private accountData:BankingService)
  {
    this.accountData.accounts().subscribe((data)=>{
      this.accounts=data;
    })
  }

  ngOnInit(): void {
  }

}
