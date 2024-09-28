import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  departureStations: string[] = [];
  arrivalStations: string[] = [];
  searchResults: any[] = [];
  departureStation: string | null = null;
  arrivalStation: string | null = null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {/*
    this.dataService.getDepartureStations().subscribe((stations: string[]) => {
      this.departureStations = stations;
    });
    this.dataService.getArrivalStations().subscribe((stations: string[]) => {
      this.arrivalStations = stations;
    });*/
  }
/*
  search(): void {
    if (this.departureStation && this.arrivalStation) {
      // Appel à un service ou une fonction pour obtenir la date de départ
      const departureDate = this.dataService.getDepartureDate(this.departureStation, this.arrivalStation);
      if (departureDate) {
        // Affichage de la date de départ dans une alerte
        alert(`La date de départ pour le trajet de ${this.departureStation} à ${this.arrivalStation} est le ${departureDate}`);
      } else {
        alert(`Impossible de trouver la date de départ pour le trajet de ${this.departureStation} à ${this.arrivalStation}`);
      }
    } else {
      alert('Veuillez sélectionner une station de départ et une station d\'arrivée');
    }
  }*/
}
