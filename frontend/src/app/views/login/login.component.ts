import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor( private ds:DataService,private route:Router) { 
    console.log(this.ds.loggedIn)
  }
  messageErr=""
   dataReceived: any; 

   loginUser(f:any) {
    if (f.valid) {
      let data = f.value;
      console.log(data);
      this.ds.loginUser(data).subscribe((response) => {
        this.dataReceived = response;
        this.ds.SaveDataUser(this.dataReceived);
        console.log(this.dataReceived);
        this.route.navigate(['/']);
        console.log(this.ds.loggedIn);
       
        console.log(this.ds.ProfilUser)
       
      }, (err: HttpErrorResponse) => {
        
        this.messageErr=err.error
      });
    } 
  }
  

  ngOnInit(): void {
  }
  

}
