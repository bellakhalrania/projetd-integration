import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { OffreOrder, OffreOrders }  from  '../Modal/Modal';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersUrl = "/api/orders";
  private offreOrder!: OffreOrder;
  private orders: OffreOrders = new OffreOrders();


  private productOrderSubject = new Subject();
  private ordersSubject = new Subject();
  private totalSubject = new Subject<number>();

  private total: number=0;

  ProductOrderChanged = this.productOrderSubject.asObservable();
  OrdersChanged = this.ordersSubject.asObservable();
  TotalChanged = this.totalSubject.asObservable();


  
  constructor(private http: HttpClient) {
  }
  saveOrder(order: OffreOrders) {
    return this.http.post(this.ordersUrl, order);
  }
  set SelectedOffreOrder(value: OffreOrder) {
    this.offreOrder = value;
    this.productOrderSubject.next();
  }

  get SelectedProductOrder() {
    return this.offreOrder;
  }

  set OffreOrders(value: OffreOrders) {
    this.orders = value;
    this.ordersSubject.next();
  }

  get ProductOrders() {
    return this.orders;
  }

  get Total() {
    return this.total;
  }

  set Total(value: number) {
    this.total = value;
    this.totalSubject.next();
  }
}
