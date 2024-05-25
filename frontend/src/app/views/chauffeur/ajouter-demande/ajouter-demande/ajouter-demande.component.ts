import { Component } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-demande',
  templateUrl: './ajouter-demande.component.html',
  styleUrls: ['./ajouter-demande.component.css']
})
export class AjouterDemandeComponent {
  startDate: Date | null = null;
  endDate: Date | null = null;
  typeconge: string = '';
  reason: string = '';

  constructor(private ds: DataService, private route: Router) { }

  add(f: any) {
    let data = f.value;
    console.log(data);
    this.ds.addDemandeConge(data).subscribe(data => console.log(data));
    this.route.navigate(['chauffeur']);
  }

  ngOnInit(): void {

  }

}
