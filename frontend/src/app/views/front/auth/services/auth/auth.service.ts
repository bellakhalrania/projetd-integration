import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = ["http://localhost:82"];

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private htpp:HttpClient) { }
  register(signupRequest:any):Observable<any>{
    return this.htpp.post(BASE_URL+"/api/auth/signup", signupRequest);
  }
}
