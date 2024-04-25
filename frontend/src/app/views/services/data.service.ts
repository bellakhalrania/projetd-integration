import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

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
