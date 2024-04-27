
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
/*import { NzMessageService} from "ng-zorro-antd/message";*/
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;


  constructor(private fb: FormBuilder,
    private authService:AuthService,
    /*private message:NzMessageService,*/
  private router:Router) {
    
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      checkPassword: ['', Validators.required,this.confirmationValidate],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }

  confirmationValidate=(control: FormGroup): { [s: string]: boolean }=>{
    if(!control.value){
      return{required:true};
    }else if(control.value !==this.signupForm.controls['password'].value){
return{confirm:true,error:true};
    }
  return{};

  }

  registre(){
    console.log(this.signupForm.value);
    this.authService.register(this.signupForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl("/login");
     /*if(res.id !=null){
        this.message.success("Signup  Successful", { nzDuration:5000});
        
      }else{
        this.message.error("Something went wrong!!!",{ nzDuration:5000});
      }*/
  })}

  onSubmit(): void {

  }
}