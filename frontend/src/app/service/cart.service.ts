import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../Modal/Modal';

const NAME_KEY = 'NAME';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) { }

  addCartToUser(cart: Cart, idUser: number): Observable<Cart> {
    return this.http.post<Cart>(`http://localhost:8085/api/addCartToUser/${idUser}`, cart);
  }


  deleteCart(id: number): Observable<Cart> {
    return this.http.delete<Cart>(`http://localhost:8085/api/deleteCart/${id}`);
  }

  findCartsForUser(idUser: number): Observable<Cart[]> {
    return this.http.get<Cart[]>(`http://localhost:8085/api/findCartsForUser/${idUser}`);
  }

  findCartById(id: number): Observable<Cart> {
    return this.http.get<Cart>(`http://localhost:8085/api/findCartById/${id}`);
  }

  removeFromCart(idCart: number, idUser: number): Observable<Cart> {
    return this.http.delete<Cart>(`http://localhost:8085/api/removeFromCart/${idCart}/${idUser}`);
  }

  findByCartName(name: string): Observable<Cart> {
    return this.http.get<Cart>(`http://localhost:8085/api/findByCartName/${name}`);
  }

  saveCartName(name: string) {
    window.sessionStorage.removeItem(NAME_KEY);
    window.sessionStorage.setItem(NAME_KEY, name);
  }



  getCartName(): string {
    return sessionStorage.getItem(NAME_KEY) || '';
  }
  
}
