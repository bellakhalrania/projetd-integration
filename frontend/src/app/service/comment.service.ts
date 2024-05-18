
import  { HttpClient }  from  '@angular/common/http';
import  { Injectable }  from  '@angular/core';
import  { Observable }  from  'rxjs';

import  { Comment }  from  '../Modal/Modal';

@Injectable({
 providedIn: 'root'
})
export class CommentService {

 constructor(private http: HttpClient) { }

 addCommentToProduct(comment: Comment, idProduct: number): Observable<Comment> {
   return this.http.post<Comment>(`http://localhost:8085/api/addCommentToProduct/${idProduct}`, comment); 
 }
 
 editComment(comment: Comment, id: number): Observable<Comment> {
   return this.http.post<Comment>(`http://localhost:8085/api/editComment/${id}`, comment); 
 }

 findCommentById(id: number): Observable<Comment> {
    return this.http.get<Comment>(`http://localhost:8085/api/findCommentById/${id}`); 
  }
  
 deleteComment(id: number): Observable<Comment> {
    return this.http.delete<Comment>(`http://localhost:8085/api/deleteComment/${id}`); 
  }

  findCommentsForProduct(idProduct: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`http://localhost:8085/api/findCommentsForProduct/${idProduct}`); 
  }
  
  findAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`http://localhost:8085/api/findAllComments/`); 
  }

}