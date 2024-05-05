import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  loggedIn:boolean=false
  loggedInEmp:boolean=false

  constructor(private http:HttpClient) { }
  //login
  loginUser(data:any){
    return this.http.post('http://localhost:8085/api/auth/signin',data)
  }
  //register 
   registeruser(ProfilUser:any){
  return this.http.post('http://localhost:8085/api/auth/signup',ProfilUser)
  }
  getAllGare(){
    return this.http.get('http://localhost:8081/api/AllGare')
  }
  addGare(gare:any){
    return this.http.post('http://localhost:8081/api/gare',gare);
  }
  deletegare(id:any){
    return this.http.delete('http://localhost:8081/api/gare/'+id)
  }
  updategare(id:string,newdata:any){
    return this.http.put('http://localhost:8081/api/gare/'+id,newdata)
  }
}
