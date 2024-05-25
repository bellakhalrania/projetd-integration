import { Injectable } from '@angular/core';
import { Offre } from 'src/app/Model/Offre';

@Injectable()
export class OffreAdminService {
  private Offres: Offre[] = [];

  constructor() {
    let p1: Offre = new Offre('abonnement', 'Bizerte-Metline', 20, new Date("2024-05-02"), new Date("2024-05-10"));
    let p2: Offre = new Offre('abonnement', 'Bizerte-rasjbal', 20, new Date("2024-05-02"), new Date("2024-05-10"));
    let p3: Offre = new Offre('abonnement', 'Bizerte-rafraf', 20, new Date("2024-05-02"), new Date("2024-05-10"));
    
    this.Offres.push(p1);
    this.Offres.push(p2);
    this.Offres.push(p3);
  }

  public getOffres(): Offre[] {
    return this.Offres;
  }
}
