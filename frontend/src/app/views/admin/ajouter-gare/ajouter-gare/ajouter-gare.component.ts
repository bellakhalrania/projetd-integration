import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { DataService } from 'src/app/views/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-gare',
  templateUrl: './ajouter-gare.component.html',
  styleUrls: ['./ajouter-gare.component.css']
})
export class AjouterGareComponent implements OnInit {

  constructor(private ds:DataService,private route:Router) { }
 
  add(f:any){
    let data=f.value;
    console.log(data);
     this.ds.addGare(data).subscribe(data=>console.log(data));
     this.route.navigate(['admin/list-gare'])
  }
  
  ngOnInit(): void {
  
  }

}
