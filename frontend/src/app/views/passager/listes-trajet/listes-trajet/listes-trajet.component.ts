import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-listes-trajet',
  templateUrl: './listes-trajet.component.html',
  styleUrls: ['./listes-trajet.component.css']
})
export class ListesTrajetComponent implements OnInit {

  dataArray : any=[];
  
  constructor(private ds:DataService) {
    this.ds.getAllTrajets().subscribe(data=>{
    this.dataArray=data  
    console.log(data);
    })
   }

  ngOnInit(): void {
  }

}
