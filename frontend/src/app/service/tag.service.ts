import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offre, Tag }from '../Modal/Modal';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  constructor(private http: HttpClient) {}

  addTagToOffre(idOffre: number, idTag: number): Observable<Offre> {
    return this.http.post<Offre>(`http://localhost:8085/api/addTagToProduct/${idOffre}/${idTag}`, null);
  }

  deleteTagFormOffre(idOffre: number, idTag: number): Observable<Offre> {
    return this.http.delete<Offre>(`http://localhost:8080/api/deleteTagFormProduct/${idOffre}/${idTag}`);
  }

  deleteTag(idTag: number): Observable<Tag> {
    return this.http.delete<Tag>(`http://localhost:8085/api/deleteTag/${idTag}`);
  }

  findTagById(id: number): Observable<Tag> {
    return this.http.get<Tag>(`http://localhost:8085/api/findTagById/${id}`);
  }

  editTag(tag: Tag, id: number): Observable<Tag> {
    return this.http.put<Tag>(`http://localhost:8085/api/editTag/${id}`, tag);
  }

  addTag(tag: Tag): Observable<Tag> {
    return this.http.post<Tag>(`http://localhost:8085/api/addTag`, tag);
  }

  findTagsForOffre(idOffre: number): Observable<Tag[]> {
    return this.http.get<Tag[]>(`http://localhost:8085/api/findTagsForProduct/${idOffre}`);
  }

  findAllTags(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8085/api/findAllTags`);
  }
  findAllTagByName(name: string): Observable<Tag[]> {
    return this.http.get<Tag[]>(`http://localhost:8085/api/findAllTagByName/${name}`);
  }

  findOffresForTag(idTak: number): Observable<Offre[]> {
    return this.http.get<Offre[]>(`http://localhost:8085/api/findProductsForTag/${idTak}`);
  }
}
