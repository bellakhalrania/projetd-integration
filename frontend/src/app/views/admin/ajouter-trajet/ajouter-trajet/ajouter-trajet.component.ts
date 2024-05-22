import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-ajouter-trajet',
  templateUrl: './ajouter-trajet.component.html',
  styleUrls: ['./ajouter-trajet.component.css']
})
export class AjouterTrajetComponent implements OnInit {

  constructor(private ds: DataService) { }

  ngOnInit(): void {
  }
 
  add(f: any) {
    let data = f.value;
    console.log(data);
    this.ds.addTrajet(data).subscribe(data => console.log(data));
  }
  }


