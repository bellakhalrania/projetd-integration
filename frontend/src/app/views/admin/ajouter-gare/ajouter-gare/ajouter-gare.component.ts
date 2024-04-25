import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-ajouter-gare',
  templateUrl: './ajouter-gare.component.html',
  styleUrls: ['./ajouter-gare.component.css']
})
export class AjouterGareComponent implements OnInit {

  constructor(private ds:DataService) { }
 
  add(f:any){
    let data=f.value;
    console.log(data);
   // this.ds.PostGare(data).subscribe(data=>console.log(data));
     this.ds.addGare(data).subscribe(data=>console.log(data));
  }
  
  ngOnInit(): void {
  
  }

}
