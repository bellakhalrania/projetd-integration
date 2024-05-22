import { AfterViewInit, Component, OnInit} from '@angular/core';

import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 
 
  constructor( private ds:DataService,private route:Router) { 
    console.log(this.ds.loggedIn)
  }
  messageErr=""
   dataReceived: any; 
   role:any;

   loginUser(f:any) {
    if (f.valid) {
      let data = f.value;
      console.log(data);
      this.ds.loginUser(data).subscribe((response) => {
        this.dataReceived = response;
        this.ds.SaveDataUser(this.dataReceived);
        this.role=this.dataReceived.role;

        console.log(this.role);
        if(this.role=="ROLE_USER"){
          this.route.navigate(['/passager/start']);
        }
        if(this.role=="ROLE_CHAUFFEUR"){
          this.route.navigate(['/chauffeur']);
        }
        if(this.role=="ROLE_ADMIN"){
          this.route.navigate(['/admin/dashboard']);
        }

        
        console.log(this.ds.loggedIn);
       
        //console.log(this.ds.ProfilUser)
       
      }, (err: HttpErrorResponse) => {
        
        this.messageErr=err.error
      });
    } 
  }
  

  ngOnInit(): void {
  }
 
  

}
