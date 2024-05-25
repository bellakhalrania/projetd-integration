import { HttpClient ,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offre } from 'src/app/Model/Offre';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private httpClient:HttpClient) { }


  public addoffre(offre: FormData){

    const headers = new HttpHeaders({
      'Authorization': `Bearer YOUR_JWT_TOKEN`
    });

    return this.httpClient.post<Offre> ("http://localhost:8085/api/addnewoffre", offre , { headers });
  }
}
