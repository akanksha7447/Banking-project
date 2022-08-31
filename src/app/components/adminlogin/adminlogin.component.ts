import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankingService } from './../../service/banking.service';
import { Admin } from 'src/app/model/admin.model';
// import { BankingService } from 'src/app/service/banking.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  adminID: string;
  password: string;
  admin : Admin = new Admin();
  logedin=false;
  private _route: any;
  // invalidlogin = false;
  // loginsuccess = false;

  constructor(private bankingService:BankingService,private router:Router) { }
  // constructor(private bankingService: BankingService){

  // }

  ngOnInit(): void {
  }

  adminlogin(){
    
      this.router.navigate(['/login']);
  }

 

//      adminlogin(){
//       this.bankingService.loginadmin(this.admin).subscribe(data => {
//         console.log(data);
//         if(Object(data)["status"]=='True'){  
//           this.logedin = true;
//           this._route.navigate(['/admindashboard']);
//       }else{
//         alert("Username or Password Incorrect")
//       }
      
//     }
//     );

// }
}

