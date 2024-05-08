import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-listes-gare',
  templateUrl: './listes-gare.component.html',
  styleUrls: ['./listes-gare.component.css']
})
export class ListesGareComponent implements OnInit {
  dataArray : any=[];
  
  constructor(private ds:DataService) {
    this.ds.getAllGare().subscribe(data=>{
    this.dataArray=data  
    console.log(data);
    })
   }
  ngOnInit(): void {
  }

}
