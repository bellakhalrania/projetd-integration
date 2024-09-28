import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  loggedIn:boolean=false
  loggedInEmp:boolean=false

  ProfilUser={
    id:'',
    name:'',
    role:'',
    email:'',
    username:''
  }

  constructor(private http:HttpClient) { }
  //login
  loginUser(data:any){
    return this.http.post('http://localhost:8085/api/auth/signin',data)
  }
  SaveDataUser(user:any){
    localStorage.setItem('id',user.id)
    localStorage.setItem('name',user.name)
    localStorage.setItem('username',user.username)
    localStorage.setItem('role',user.role)
    localStorage.setItem('email',user.email)
    
    this.ProfilUser.id=user.id
    this.ProfilUser.name=user.name
    this.ProfilUser.username=user.username
    this.ProfilUser.role=user.role
    this.ProfilUser.email=user.email

    this.loggedIn=true
 }

  //register 
   registeruser(ProfilUser:any){
  return this.http.post('http://localhost:8085/api/auth/signup',ProfilUser)
  }

  getAllUsers(){
    return this.http.get('http://localhost:8085/api/auth/getAllUser')
  }
  getuserById(id:any){
    return this.http.get('http://localhost:8085/api/auth/getUser/'+id)
  }
  
  getuserByUsername(username:any){
    return this.http.get('http://localhost:8085/api/auth/getUsername/'+username)
  }
  /*****************************gare********************************* */
  getAllGare(){
    return this.http.get('http://localhost:8085/api/AllGare')
  }
  addGare(gare:any){
    return this.http.post('http://localhost:8085/api/gare',gare);
  }
  deletegare(id:any){
    return this.http.delete('http://localhost:8085/api/gare/'+id)
  }
  updategare(id:string,newdata:any){
    return this.http.put('http://localhost:8085/api/gare/'+id,newdata)
  }
  /****************************trajet**********************/
  getAllTrajets(){
    return this.http.get('http://localhost:8085/api/AllTrajet')
  }
  addTrajet(trajet:any){
    return this.http.post('http://localhost:8085/api/trajet',trajet);
  }
  deleteTrajet(id:any){
    return this.http.delete('http://localhost:8085/api/trajet/'+id)
  }
  updateTrajet(id:string,newdata:any){
    return this.http.put('http://localhost:8085/api/trajet/'+id,newdata)
  }
  /**********************************bus************************************* */
  getAllbus(){
    return this.http.get('http://localhost:8085/api/cars')
  }
  addbus(bus:any){
    return this.http.post('http://localhost:8085/api/cars',bus);
  }
  deletebus(id:any){
    return this.http.delete('http://localhost:8085/api/cars/'+id)
  }
  updatebus(id:string,newdata:any){
    return this.http.put('http://localhost:8085/api/cars/'+id,newdata)
  }

  /**********************************chauffeur************************************* */
  getAllchauffeur(){
    return this.http.get('http://localhost:8085/api/chauffeurs')
  }
  addchauffeur(chauffeur:any){
    return this.http.post('http://localhost:8085/api/chauffeurs',chauffeur);
  }
  deletechauffeur(id:any){
    return this.http.delete('http://localhost:8085/api/chauffeurs/'+id)
  }
  updatechauffeur(id:string,newdata:any){
    return this.http.put('http://localhost:8085/api/chauffeurs/'+id,newdata)
  }
    /**********************************demandeConge************************************* */
    addDemandeConge(demandeConge: any) {
      return this.http.post('http://localhost:8085/api/conge', demandeConge);
      
    }
    getAllDemandeConge(){
      return this.http.get('http://localhost:8085/api/conge')
    }
    /**********************************reclamation************************************* */
    addreclamation(reclamation: any) {
      return this.http.post('http://localhost:8085/api/chauffeur/Reclamation', reclamation);
      
    }

}

