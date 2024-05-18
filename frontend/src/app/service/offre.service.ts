
import  { HttpClient }  from  '@angular/common/http';
import  { Injectable }  from  '@angular/core';
import  { Observable }  from  'rxjs';
import  { Offre }  from  '../Modal/Modal';
import  { Comment }  from  '../Modal/Modal';
@Injectable({
 providedIn: 'root'
})
export class OffreService {

 constructor(private http: HttpClient) { }

 addOffreToCategory(offre: Offre, idCategory: number): Observable<Offre> {
   return this.http.post<Offre>(`http://localhost:8085/api/addProductToCategory/${idCategory}`, offre); 
 }

 
 editOffre(offre: Offre, id: number): Observable<Offre> {
   return this.http.post<Offre>(`http://localhost:8085/api/editOffre/${id}`, offre); 
 }

 findOffreById(id: number): Observable<Offre> {
    return this.http.get<Offre>(`http://localhost:8085/api/findProductById/${id}`); 
  }
  
 deleteOffre(id: number): Observable<Offre> {
    return this.http.delete<Offre>(`http://localhost:8085/api/deleteProduct/${id}`); 
  }

  findOffresForCategory(idCategory: number): Observable<Offre[]> {
    return this.http.get<Offre[]>(`http://localhost:8085/api/findProductsForCategory/${idCategory}`); 
  }
  
  findAllOffres(): Observable<Offre[]> {
    return this.http.get<Offre[]>(`http://localhost:8085/api/findAllProducts/`); 
  }
  
  findByName(name: string): Observable<Offre> {
    return this.http.get<Offre>(`http://localhost:8085/api/findByName/${name}`); 
  }
  
 deleteOffreFromTag(idOffre: number, idTag: number): Observable<Offre> {
    return this.http.delete<Offre>(`http://localhost:8085/api/deleteProductFromTag/${idOffre}/${idTag}`); 
  }

}