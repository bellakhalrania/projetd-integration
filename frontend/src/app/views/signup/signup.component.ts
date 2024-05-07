
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
/*import { NzMessageService} from "ng-zorro-antd/message";*/
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  messageErr=""


  constructor(private ds:DataService,
  private route:Router) {
  }

  register(f:any){
    let data=f.value
    console.log(data)
    this.ds.registeruser(data).subscribe(response=>{
      console.log(response)
      this.route.navigate(['login'])
      
    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
      
      
    })
  
   }
  ngOnInit() {
    
  }

  

  }
