import { Component } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-reclamation',
  templateUrl: './ajouter-reclamation.component.html',
  styleUrls: ['./ajouter-reclamation.component.css']
})
export class AjouterReclamationComponent {

  reclamant: string = '';
  lieu: string = '';
  date: Date | null = null;
  description: string = '';
  cars: { idBus: number, name: string, matricule: number }[] = [
    { idBus: 1, name: 'Car 1', matricule: 123456 },
    { idBus: 2, name: 'Car 2', matricule: 789012 },
    { idBus: 3, name: 'Car 3', matricule: 345678 }
  ];
  selectedCar: { idBus: number, name: string, matricule: number } | null = null;
  constructor(private ds: DataService, private route: Router) { }

  add(f: any) {
    let data = f.value;
    data.car = this.selectedCar;
    
    this.ds.addreclamation(data).subscribe(
      (response) => {
        console.log('Reclamation added successfully:', response);
        // Redirect to the reclamation list page
        this.route.navigate(['/chauffeur']);
      },
      (error) => {
        console.error('Error adding reclamation:', error);
        // Display an error message
        // this.formMessage = 'Error adding reclamation. Please try again.';
      }
    );
  }

  ngOnInit(): void {
  }

}
